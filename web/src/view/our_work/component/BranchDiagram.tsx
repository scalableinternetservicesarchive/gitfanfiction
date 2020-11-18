import * as d3 from 'd3';
import * as React from 'react';

interface dataInterface {
  main: [number, string, number[]];
  sub: [number, number, [number, number], number[], number][];
}


export default function BranchDiagram({ width = 800, height = 200, fandomId = 1, setPostId = console.log }) {

  const [point, setPoint] = React.useState(0);
  point - point
  // const [content, setContent] = React.useState(0);
  let ref: any = React.useRef();


  //get branch data


  const drawBranch = (exampleData: dataInterface) => {

    // data I am getting: {main, sub}

    // main = [mainstory_Id, type, length]
    // length = [int!]! = [chapters of book I, ... ] || [minutes of epsiode I, ...]
    // type = "book" or "film"

    // sub = n x [substory_Id, origin, start, #length, upvote]
    // origin = main_story_Id || other substory_Id
    // start = [int,int] = [bookn,chaptern] || [episode, minutes]
    // #length = [int!]! = [length of chapter I, length of chapter II] // (word count) different from main.length
    // upvote -> will translate to thickness
    // height is derived from random with seed = substory_Id

    // const exampleData: dataInterface = {
    //   "main": [123456, "book", [30, 20, 50, 20]],
    //   "sub": [
    //     [464701, 464700, [1, 5], [500, 1000, 900, 400, 1000, 1000], 0],
    //     [464700, 123456, [1, 5], [500, 1000, 900, 400, 1000, 1000], 30],
    //     [225323, 123456, [2, 10], [1300, 900, 300, 2000], 3],
    //     [235234, 123456, [2, 0], [1000], 0],
    //     [234599, 225323, [1, 3], [1500], 3] //starts from 1 because there is only one book for substory 225323
    //   ]
    // }

    const data = exampleData;


    // assign svg + define few css style beforehand
    const svgElement = d3.select(ref.current)
    svgElement.append("defs").append("style")
      .text(`circle.highlighted { stroke: orangered; fill: orangered; }
      .s1 {stroke:'black'//#79bd79;}
      .s2 {fill:#806202;}
      .s3 {fill:#157415;}`);

    // create main line
    const line = d3.line();
    const g_lines = svgElement.append("g")

    // main line length = 10 x ch x b OR 1 x min x episode
    let main_total_length = data.main[2].reduce((a, b) => a + b, 0);
    let main_length_unit = (data.main[1] == "book") ? 10 : 1
    let main_line_length = main_total_length * main_length_unit
    g_lines.append("path")
      .attr("d", () => line([[0, 0], [main_line_length, 0]]))
      .attr("stroke", "black")
      .attr("stroke-width", 5)
      .attr("fill", "none")

    // mark important period in main line with circle
    const g_time_marker = svgElement.append("g")
    g_time_marker.append("circle") // at zero
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 5)
    data.main[2].reduce((a, b) => { // all other point
      g_time_marker.append("circle")
        .attr("cx", (a + b) * main_length_unit)
        .attr("cy", 0)
        .attr("r", 5)
      return a + b
    }, 0)

    // create sub line
    const main_id = data.main[0]
    const text_length_unit = 0.01 // 1 unit per 100 word
    const sub_line_time_marker_data: [number, number, number][] = [] // used later for subline time marker
    data.sub.map((story) => {

      //constants
      const my_id = story[0];
      const upvote = story[4];
      const max_height = 20;
      const min_height = 10;

      //find
      let height = 0;
      let length = 0;

      function find_start_y(id: number): number {
        const story = data.sub.find(element => element[0] == id)
        if (story == undefined) throw 'undefined story, no match with given id';
        if (story[1] == main_id) return 0;
        else return (min_height + ((story[1] % 100) / 100) * (max_height - min_height)) + find_start_y(story[1]);
      }

      function find_start_x(id: number): number {
        const story = data.sub.find(element => element[0] == id)
        if (story == undefined) throw 'undefined story, no match with given id';
        if (story[1] == main_id) {
          let x = 0;
          for (let i = 1; i < story[2][0]; i++) x += data.main[2][i - 1];
          x += story[2][1];
          x *= main_length_unit;
          return x;
        }
        else {
          const origin = data.sub.find(element => element[0] == story[1])
          if (origin == undefined) throw 'undefined origin, no match with given id';
          let x = 0;
          for (let i = 0; i < story[2][1]; i++) x += origin[3][i]
          x *= text_length_unit;
          return x + find_start_x(story[1]);
        }
      }

      function find_sign(id: number): number {
        const story = data.sub.find(element => element[0] == id)
        if (story == undefined) throw 'undefined story, no match with given id';
        if (story[1] == main_id) return (id % 2) ? -1 : 1;
        else return find_sign(story[1]);
      }

      //height of each story should be fixed. derivable from unique constant (like id)
      //however! it should have matching +/- sign of origin's height
      height = min_height + ((my_id % 100) / 100) * (max_height - min_height);

      //length is word count of entire story (1 unit per 100 word)
      length = story[3].reduce((a, b) => a + b, 0) * text_length_unit;
      //start_point depends on origin
      let x = find_start_x(my_id)
      let y = find_start_y(my_id)

      //let's take care of sign here
      const sign = find_sign(my_id);
      height *= sign;
      y *= sign;

      //now create line with above info
      g_lines.append("path")
        .attr("d", () => line([[x, y], [x + 0, y + height], [x + length, y + height]]))
        .attr("stroke", "black")
        .attr("stroke-width", Math.log(upvote + 2))
        .attr("fill", "none")

      //create data structure for sub time marker with above info
      sub_line_time_marker_data.push([my_id, x, y + height])
    })

    // create sub line time marker
    const g_sub_time_marker = svgElement.append("g")
    console.log(sub_line_time_marker_data)
    function get_first_element(d: number[]) { return d[1] }
    function get_second_element(d: number[]) { return d[2] }

    g_sub_time_marker.selectAll("circle")
      .data(sub_line_time_marker_data)
      .join("circle")
      .attr("cx", get_first_element)
      .attr("cy", get_second_element)
      .attr("r", () => 2)

    const d3_bypass: any = d3;
    const delaunay = d3_bypass.Delaunay.from(sub_line_time_marker_data, get_first_element, get_second_element);

    // select all items to apply zoom feature
    const lines = g_lines.selectAll("path")
    const sub_time_marker = g_sub_time_marker.selectAll("circle")
    const time_marker = g_time_marker.selectAll("circle")

    // apply other css
    lines.classed("s1", true);
    g_sub_time_marker.classed("s2", true);
    time_marker.classed("s3", true)

    let transform_save: any; // used for finding the closest point later in user interaction
    let saved_id = -1; // chosen id to read. saved for state control

    // zoom calibration
    const zoom = d3.zoom()
      .scaleExtent([0.1, 40]) //limit scaling from k=1-40
      .on("zoom", (e: any) => {
        // transform = {k:zoom_float, x:float ,y:float}
        const transform = transform_save = e.transform;
        g_lines.attr("transform", transform);
        // lines.style("stroke-width", 3 / Math.sqrt(transform.k));

        g_time_marker.attr("transform", transform);
        time_marker.attr("r", 3 / Math.sqrt(transform.k));

        g_sub_time_marker.attr("transform", transform);
        sub_time_marker.attr("r", 3 / Math.sqrt(transform.k));
      });

    // start zoom
    const main_line_margin = 0.05;
    svgElement.call(zoom).call(zoom.transform,
      d3.zoomIdentity
        .translate(30, height / 2) //initial camera zoom
    )
      .on("pointermove", event => {
        //user interaction. find closest point
        const p = transform_save.invert(d3_bypass.pointer(event)); //p = canvas position where the mouse points
        const i = delaunay.find(...p); //index of closest dot to p

        //id chosen
        if (data.sub.length > 0) {
          saved_id = data.sub[i][0];
          setPoint(data.sub[i][0]);
        }

        //highlight the found one (i)
        sub_time_marker.classed("highlighted", (_, j) => i === j); //set its css class ".highlighted = true"
        d3.select(sub_time_marker.nodes()[i]).raise(); //raise it to top view

        // console.log(transform_save, p)
      })

    //transition effect
    svgElement.transition().duration(3000)
      .call(zoom.transform,
        d3.zoomIdentity
          .translate(0, height / 2)
          .scale(width / (main_line_length) * 1 / (1 + main_line_margin))
          .translate(main_line_length * (main_line_margin / 2), 0))
    //   .on("end",()=>{
    //     svgElement.transition().duration(3000)
    //     .call(zoom.transform,
    //       d3.zoomIdentity
    //         .translate(0, height / 2)
    //         .scale(width / (main_line_length) * 1 / (1 + main_line_margin))
    //         .translate(main_line_length * (main_line_margin / 2), 0)
    //     )
    //   })

    // click handler
    g_sub_time_marker.on("click", function (event) {
      setPostId(saved_id);
    });

    // keyboard space handler
    d3.select("body").on("keydown", function (event: any) {
      // console.log(event);
      if (event.keyCode == 32) {
        if (event.srcElement.tagName != "INPUT") {
          setPostId(saved_id);
          // event.preventDefault();
        }
      }
    });
    //notable problem with this approach
    //no invalid data check. like suppose origin's chapter disappears. array overflow
    //

  };

  React.useEffect(() => {
    if (fandomId <= 0) return;
    fetch('/tree', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fandomId }),
    })
      .then(async res => {
        if (res.status == 200) return res.text();
        const err = await res.text()
        throw err;
      })
      .then((res) => {
        d3.select("svg").selectAll("*").remove();
        console.log(JSON.parse(res));
        drawBranch(JSON.parse(res));
      })
      .catch(err => {
        console.log(err);
      })
  }, [fandomId])


  return (
    <div>

      <svg className="container" ref={ref} width={width} height={height}
      // style={{ outline: "thin solid black" }}
      ></svg>
      {/* <div>{"hover   :" + point}</div> */}
      {/* <div>{"selected:" + content}</div> */}
    </div>
  )
}
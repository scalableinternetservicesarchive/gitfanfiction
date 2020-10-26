// from bespin Practice Demo 2 from Sangjoon's computer



import { Meta, Story } from '@storybook/react';
import * as d3 from 'd3';
import * as React from 'react';
import './BranchDiagram_test1.css';

const random = d3.randomNormal(5, 1);

function DemoComponent2({ surveyId }: { surveyId: number }) {

  const [point, setPoint] = React.useState(0);
  const ref = React.useRef();
  const [width, height] = [600, 400]


  React.useEffect(() => {

    // 20 random points + delaunay (algorithm for closest point)
    const d = d3.range(20).map(_ => [random() * 10, random() * 10])
    const delaunay = d3.Delaunay.from(d, d => d[0], d => d[1]);

    const svgElement = d3.select(ref.current) //select svg canvas
    const g = svgElement.append("g") //create group of svg


    const points = g //put cicles in this group
      .selectAll("circle")
      .data(d)
      .join("circle")
      .attr("cx", d => d[0])
      .attr("cy", d => d[1])
      .attr("r", d => 3)

    //5 lines
    const d_line = [[[100, 100], [100, 80], [150, 80], [200, 80]],
    [[0, 0], [1, 1], [4, 4], [50, 50]],
    [[2, 3], [2, 7], [30, 20], [150, 120]],
    [[1, 3], [2, 7], [3, 2], [50, 20]],
    [[1, 3], [2, 7], [3, 2], [50, 20]]]
    const line = d3.line();

    const g2 = svgElement.append("g")
    const lines = g2
      .selectAll("path")
      .data(d_line)
      .join("path")
      .attr("d", d => line(d))
      .attr("stroke", "black")
      .attr("stroke-width", 4)
      .attr("fill", "none")

    // zoom configuration
    let transform_save; // used for finding the closest point later in user interaction

    const zoom = d3.zoom()
      .scaleExtent([1, 40]) //limit scaling from k=1-40
      .on("zoom", ({ transform }) => {
        // transform = {k:zoom_float, x:float ,y:float}
        transform_save = transform;
        g.attr("transform", transform);
        g.style("stroke-width", 3 / Math.sqrt(transform.k));
        points.attr("r", 3 / Math.sqrt(transform.k));

        g2.attr("transform", transform);
        lines.attr("stroke-width", 3 / Math.sqrt(transform.k));
      });

    // attach zoom to svg
    console.log(zoom.transform);
    console.log(d3.zoomIdentity);
    svgElement.call(zoom)
      .call(zoom.transform, d3.zoomIdentity)
      .on("pointermove", event => {
        //user interaction. find closest point
        const p = transform_save.invert(d3.pointer(event)); //p = canvas position where the mouse points
        const i = delaunay.find(...p); //index of closest dot to p

        setPoint(i);
        //highlight the found one (i)
        points.classed("highlighted", (_, j) => i === j); //set its css class ".highlighted = true"
        d3.select(points.nodes()[i]).raise(); //raise it to top view

        // console.log(transform_save, p)
      })


    // var circle = svgElement.append("circle")
    //   .attr("r", 5)
    //   .style("fill", "red")
    //   .attr("cx", 0)
    //   .attr("cy", 0);

    // lines.on("pointermove", function (event) {
    //   console.log(d3.pointer(event));
    //   console.log(transform_save.invert(d3.pointer(event)));
    //   circle.attr("cx", d3.pointer(event)[0])
    //     .attr("cy", d3.pointer(event)[1]);
    // });

  }, [])


  return (
    <div>
      <svg width={width} height={height} ref={ref} style={{ outline: "thin solid red" }} >
      </svg>
      <div>{"" + point}</div>
    </div>
  )
}















interface InnerComponentProps {
  title: string,
  page: number,
  date?: number
}


function InnerComponent(prop: InnerComponentProps) {
  return <div>
    <div>{prop.title}</div>
    <div>{prop.page}</div>
  </div>
}

export default {
  title: 'Practice_Demo2',
} as Meta

const DemoTemplate: Story<{ surveyId: number }> = args => <DemoComponent2 {...args} />

export const Demo = DemoTemplate.bind({})
Demo.args = {
  surveyId: 1,
}
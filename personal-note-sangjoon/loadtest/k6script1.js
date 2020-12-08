//run with following command $ k6 run k6script1.js

import http from 'k6/http';
import { check, sleep } from 'k6';
export let options = {
  vus: 5, duration: "1s"
};
export default function () {
  let res = http.get('http://localhost:3000/app/login');
  check(res, { 'status was 200': (r) => r.status == 200 });
  // console.log(200, res.timings.duration)
  sleep(1)
}
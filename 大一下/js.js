function co(gen) {
   return()=>{
    //    console.log(gen().next().value.then((ra)=>{
    //     console.log(ra);
    //    }));
    const co = (gen) => () => gen().next().value.then(console.log)
   }
}

const fn = (data, ms) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(data);
    }, ms)
  );

function* gen() {
  console.log("start");
  const data = yield fn("hello", 1000);
  console.log(data);
}
const f = co(gen);
f()
/**
 * start
 * 1000毫秒后打印hello
 */
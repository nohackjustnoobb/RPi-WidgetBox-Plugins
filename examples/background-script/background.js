let ended = false;

const sleep = async (duration) =>
  new Promise((res) => setTimeout(res, duration));

async function start(send, _) {
  while (!ended) {
    send({
      type: "test",
      data: "hello world",
    });
    await sleep(1000);
  }
}

function stop() {
  ended = true;
}

export default {
  start,
  stop,
};

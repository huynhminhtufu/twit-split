import twitSplit from "@/utils/split/twit-split";

test("split function", () => {
  const len = 50;
  const output = twitSplit(
    "I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.",
    len
  );

  expect(output instanceof Array).toBe(true);
  expect(output.length).toBeGreaterThanOrEqual(1);
  output.forEach(e => {
    expect(e.length).toBeLessThan(len);
  });
});

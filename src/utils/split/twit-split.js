export default function(twit, len = 50) {
  let curr = len;
  let prev = 0;
  let output = [];

  while (twit[curr]) {
    if (twit[curr++] == " ") {
      if (twit.substring(prev, curr).length > len + 1) {
        return [];
      }

      output.push(twit.substring(prev, curr));
      prev = curr;
      curr += len;
    } else {
      let currReverse = curr;
      do {
        if (twit.substring(currReverse - 1, currReverse) == " ") {
          if (twit.substring(prev, currReverse).length > len + 1) {
            return [];
          }

          output.push(twit.substring(prev, currReverse));
          prev = currReverse;
          curr = currReverse + len;
          break;
        }

        currReverse--;
      } while (currReverse > prev);
    }
  }

  if (twit.substr(prev).length > len) {
    return [];
  }

  output.push(twit.substr(prev));

  return output;
}

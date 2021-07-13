import numberWithCommas from "./numbersWithCommas";
export default function getPrice(p) {
  if (p === 0) return "?";
  if (p <= 0.99 && p > 0.1) return "$" + p.toFixed(3);
  if (p < 0.1 && p > 0.01) return "$" + p.toFixed(4);
  if (p < 0.01 && p > 0.001) return "$" + p.toFixed(5);
  if (p < 0.001 && p > 0.0001) return "$" + p.toFixed(6);
  if (p < 0.0001 && p > 0.00001) return "$" + p.toFixed(7);
  if (p < 0.00001 && p > 0.000001) return "$" + p.toFixed(8);
  if (p < 0.000001 && p > 0.0000001) return "$" + p.toFixed(9);
  if (p < 0.0000001 && p > 0.00000001) return "$" + p.toFixed(10);
  if (p < 0.00000001 && p > 0.000000001) return "$" + p.toFixed(11);
  if (p < 0.000000001 && p > 0.0000000001) return "$" + p.toFixed(12);
  if (p < 0.0000000001 && p > 0.00000000001) return "$" + p.toFixed(13);
  if (p < 0.00000000001 && p > 0.000000000001) return "$" + p.toFixed(14);
  if (p < 0.000000000001 && p > 0.0000000000001) return "$" + p.toFixed(15);
  if (p < 0.0000000000001 && p > 0.00000000000001) return "$" + p.toFixed(16);
  if (p < 0.00000000000001 && p > 0.000000000000001) return "$" + p.toFixed(17);
  if (p < 0.000000000000001 && p > 0.0000000000000001)
    return "$" + p.toFixed(18);
  if (p < 0.0000000000000001 && p > 0.00000000000000001)
    return "$" + p.toFixed(19);
  if (p < 0.00000000000000001 && p > 0.000000000000000001)
    return "$" + p.toFixed(20);
  if (p < 0.000000000000000001 && p > 0.0000000000000000001)
    return "$" + p.toFixed(21);
  return "$" + numberWithCommas(p.toFixed(2));
}

import { B as t, r as d } from "./index-DVJv-V4L.js";
import { c as l } from "./index-nEdLvayB.js";
typeof window < "u" && (window.Buffer = window.Buffer || t);
class b extends l.Client {
  options;
  static async deploy(A) {
    return l.Client.deploy(null, A);
  }
  constructor(A) {
    (super(
      new l.Spec([
        "AAAABAAAAAAAAAAAAAAABUVycm9yAAAAAAAABwAAABVHYW1lIGlzIG5vdCBhdmFpbGFibGUAAAAAAAAQR2FtZU5vdEF2YWlsYWJsZQAAAAEAAAAdUGxheWVyIGlzIGFscmVhZHkgaW4gdGhlIGdhbWUAAAAAAAANQWxyZWFkeUluR2FtZQAAAAAAAAIAAAAXR2FtZSBpcyBub3QgaW4gcHJvZ3Jlc3MAAAAAEUdhbWVOb3RJblByb2dyZXNzAAAAAAAAAwAAABlQbGF5ZXIgaXMgbm90IGluIHRoZSBnYW1lAAAAAAAACU5vdEluR2FtZQAAAAAAAAQAAAAbSXQncyBub3QgdGhpcyBwbGF5ZXIncyB0dXJuAAAAAAtOb3RZb3VyVHVybgAAAAAFAAAAHENhcmQgaXMgbm90IGluIHBsYXllcidzIGhhbmQAAAANQ2FyZE5vdEluSGFuZAAAAAAAAAYAAAAUR2FtZSBpcyBhbHJlYWR5IGZ1bGwAAAAIR2FtZUZ1bGwAAAAH",
        "AAAAAAAAAAtDb25zdHJ1Y3RvcgAAAAANX19jb25zdHJ1Y3RvcgAAAAAAAAAAAAAA",
        "AAAAAAAAAEFTdGFydCBhIG5ldyBnYW1lIHdpdGggdHdvIHBsYXllcnMKQ2FsbGVkIGJ5IHRoZSBwbGF0Zm9ybSBjb250cmFjdAAAAAAAAAlzdHJ0X2dhbWUAAAAAAAAEAAAAAAAAAAdnYW1lX2lkAAAAAAUAAAAAAAAAB3BsYXllcjEAAAAAEwAAAAAAAAAHcGxheWVyMgAAAAATAAAAAAAAABFwbGF0Zm9ybV9jb250cmFjdAAAAAAAABMAAAABAAAD6QAAA+0AAAAAAAAAAw==",
        "AAAAAAAAABVQbGF5IGEgY2FyZCBmcm9tIGhhbmQAAAAAAAAJcGxheV9jYXJkAAAAAAAAAgAAAAAAAAAGcGxheWVyAAAAAAATAAAAAAAAAApjYXJkX3ZhbHVlAAAAAAAFAAAAAQAAA+kAAAPtAAAAAAAAAAM=",
        "AAAAAAAAABhSZXNldCBnYW1lIChmb3IgdGVzdGluZykAAAAKcmVzZXRfZ2FtZQAAAAAAAAAAAAA=",
      ]),
      A,
    ),
      (this.options = A));
  }
  fromJSON = {
    strt_game: this.txFromJSON,
    play_card: this.txFromJSON,
    reset_game: this.txFromJSON,
  };
}
const B = new b({
  networkPassphrase: "Standalone Network ; February 2017",
  contractId: "CAC4CAIT7J7PBZHSWL4TDCGQIFABZCMRGKIPJLWZENZ2CBJDG2ZAMUTS",
  rpcUrl: d,
  allowHttp: !0,
  publicKey: void 0,
});
export { B as default };

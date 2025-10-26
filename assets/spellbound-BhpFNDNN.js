import { B as d, r as t } from "./index-DVJv-V4L.js";
import { c } from "./index-nEdLvayB.js";
typeof window < "u" && (window.Buffer = window.Buffer || d);
class b extends c.Client {
  options;
  static async deploy({ admin: A }, B) {
    return c.Client.deploy({ admin: A }, B);
  }
  constructor(A) {
    (super(
      new c.Spec([
        "AAAABAAAAAAAAAAAAAAABUVycm9yAAAAAAAAAwAAADJUaGUgY29udHJhY3QgZmFpbGVkIHRvIHRyYW5zZmVyIFhMTSB0byB0aGUgZ3Vlc3NlcgAAAAAAGUZhaWxlZFRvVHJhbnNmZXJUb0d1ZXNzZXIAAAAAAAABAAAAMlRoZSBndWVzc2VyIGZhaWxlZCB0byB0cmFuc2ZlciBYTE0gdG8gdGhlIGNvbnRyYWN0AAAAAAAbRmFpbGVkVG9UcmFuc2ZlckZyb21HdWVzc2VyAAAAAAIAAAA2VGhlIGNvbnRyYWN0IGhhcyBubyBiYWxhbmNlIHRvIHRyYW5zZmVyIHRvIHRoZSBndWVzc2VyAAAAAAATTm9CYWxhbmNlVG9UcmFuc2ZlcgAAAAAD",
        "AAAAAAAAAEhDb25zdHJ1Y3RvciB0byBpbml0aWFsaXplIHRoZSBjb250cmFjdCB3aXRoIGFuIGFkbWluIGFuZCBhIHJhbmRvbSBudW1iZXIAAAANX19jb25zdHJ1Y3RvcgAAAAAAAAEAAAAAAAAABWFkbWluAAAAAAAAEwAAAAA=",
        "AAAAAAAAACpVcGRhdGUgdGhlIG51bWJlci4gT25seSBjYWxsYWJsZSBieSBhZG1pbi4AAAAAAAVyZXNldAAAAAAAAAAAAAAA",
        "AAAAAAAAAB9HdWVzcyBhIG51bWJlciBiZXR3ZWVuIDEgYW5kIDEwAAAAAAVndWVzcwAAAAAAAAIAAAAAAAAACGFfbnVtYmVyAAAABgAAAAAAAAAHZ3Vlc3NlcgAAAAATAAAAAQAAA+kAAAABAAAAAw==",
        "AAAAAAAAAChBZG1pbiBjYW4gYWRkIG1vcmUgZnVuZHMgdG8gdGhlIGNvbnRyYWN0AAAACWFkZF9mdW5kcwAAAAAAAAEAAAAAAAAABmFtb3VudAAAAAAACwAAAAA=",
        "AAAAAAAAADlVcGdyYWRlIHRoZSBjb250cmFjdCB0byBuZXcgd2FzbS4gT25seSBjYWxsYWJsZSBieSBhZG1pbi4AAAAAAAAHdXBncmFkZQAAAAABAAAAAAAAAA1uZXdfd2FzbV9oYXNoAAAAAAAD7gAAACAAAAAA",
        "AAAAAAAAACpyZWFkb25seSBmdW5jdGlvbiB0byBnZXQgdGhlIGN1cnJlbnQgYWRtaW4AAAAAAAVhZG1pbgAAAAAAAAAAAAABAAAD6AAAABM=",
        "AAAAAAAAADxTZXQgYSBuZXcgYWRtaW4gYWRkcmVzcy4gVGhpcyBpcyBvbmx5IGNhbGxhYmxlIGJ5IHRoZSBhZG1pbi4AAAAJc2V0X2FkbWluAAAAAAAAAQAAAAAAAAAFYWRtaW4AAAAAAAATAAAAAA==",
      ]),
      A,
    ),
      (this.options = A));
  }
  fromJSON = {
    reset: this.txFromJSON,
    guess: this.txFromJSON,
    add_funds: this.txFromJSON,
    upgrade: this.txFromJSON,
    admin: this.txFromJSON,
    set_admin: this.txFromJSON,
  };
}
const W = new b({
  networkPassphrase: "Standalone Network ; February 2017",
  contractId: "CAV7NM2OGJZTJAOFD7TZ2PVK3242C7NE3UX53DMZ43VPRL3B4PQGMMYD",
  rpcUrl: t,
  allowHttp: !0,
  publicKey: void 0,
});
export { W as default };

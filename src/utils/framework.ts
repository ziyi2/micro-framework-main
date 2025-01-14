import { start, registerMicroApps, IRegisterApp } from "micro-framework-test";

export function registerFrameworkMicroApps(microApps: IRegisterApp[]) {
  registerMicroApps(microApps);
  start({
    sandbox: true,
    prefetch: "all",
  });
}

// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class CookieStickinessPolicy extends lumi.NamedResource implements CookieStickinessPolicyArgs {
    public readonly cookieExpirationPeriod?: number;
    public readonly lbPort: number;
    public readonly loadBalancer: string;

    constructor(name: string, args: CookieStickinessPolicyArgs) {
        super(name);
        this.cookieExpirationPeriod = args.cookieExpirationPeriod;
        if (args.lbPort === undefined) {
            throw new Error("Property argument 'lbPort' is required, but was missing");
        }
        this.lbPort = args.lbPort;
        if (args.loadBalancer === undefined) {
            throw new Error("Property argument 'loadBalancer' is required, but was missing");
        }
        this.loadBalancer = args.loadBalancer;
    }
}

export interface CookieStickinessPolicyArgs {
    readonly cookieExpirationPeriod?: number;
    readonly lbPort: number;
    readonly loadBalancer: string;
}

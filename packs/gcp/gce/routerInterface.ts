// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class RouterInterface extends lumi.NamedResource implements RouterInterfaceArgs {
    public readonly ipRange?: string;
    public readonly project?: string;
    public readonly region?: string;
    public readonly router: string;
    public readonly vpnTunnel: string;

    constructor(name: string, args: RouterInterfaceArgs) {
        super(name);
        this.ipRange = args.ipRange;
        this.project = args.project;
        this.region = args.region;
        if (args.router === undefined) {
            throw new Error("Property argument 'router' is required, but was missing");
        }
        this.router = args.router;
        if (args.vpnTunnel === undefined) {
            throw new Error("Property argument 'vpnTunnel' is required, but was missing");
        }
        this.vpnTunnel = args.vpnTunnel;
    }
}

export interface RouterInterfaceArgs {
    readonly ipRange?: string;
    readonly project?: string;
    readonly region?: string;
    readonly router: string;
    readonly vpnTunnel: string;
}

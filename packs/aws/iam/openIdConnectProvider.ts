// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class OpenIdConnectProvider extends lumi.NamedResource implements OpenIdConnectProviderArgs {
    public readonly arn?: string;
    public readonly clientIdList: string[];
    public readonly thumbprintList: string[];
    public readonly url: string;

    constructor(name: string, args: OpenIdConnectProviderArgs) {
        super(name);
        if (args.arn === undefined) {
            throw new Error("Property argument 'arn' is required, but was missing");
        }
        this.arn = args.arn;
        if (args.clientIdList === undefined) {
            throw new Error("Property argument 'clientIdList' is required, but was missing");
        }
        this.clientIdList = args.clientIdList;
        if (args.thumbprintList === undefined) {
            throw new Error("Property argument 'thumbprintList' is required, but was missing");
        }
        this.thumbprintList = args.thumbprintList;
        if (args.url === undefined) {
            throw new Error("Property argument 'url' is required, but was missing");
        }
        this.url = args.url;
    }
}

export interface OpenIdConnectProviderArgs {
    readonly arn?: string;
    readonly clientIdList: string[];
    readonly thumbprintList: string[];
    readonly url: string;
}

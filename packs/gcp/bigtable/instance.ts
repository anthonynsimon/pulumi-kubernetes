// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Instance extends lumi.NamedResource implements InstanceArgs {
    public readonly clusterId: string;
    public readonly displayName?: string;
    public readonly numNodes?: number;
    public readonly project?: string;
    public readonly storageType?: string;
    public readonly zone: string;

    constructor(name: string, args: InstanceArgs) {
        super(name);
        if (args.clusterId === undefined) {
            throw new Error("Property argument 'clusterId' is required, but was missing");
        }
        this.clusterId = args.clusterId;
        this.displayName = args.displayName;
        this.numNodes = args.numNodes;
        this.project = args.project;
        this.storageType = args.storageType;
        if (args.zone === undefined) {
            throw new Error("Property argument 'zone' is required, but was missing");
        }
        this.zone = args.zone;
    }
}

export interface InstanceArgs {
    readonly clusterId: string;
    readonly displayName?: string;
    readonly numNodes?: number;
    readonly project?: string;
    readonly storageType?: string;
    readonly zone: string;
}

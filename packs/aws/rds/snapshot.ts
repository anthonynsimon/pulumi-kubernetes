// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Snapshot extends lumi.NamedResource implements SnapshotArgs {
    public readonly allocatedStorage?: number;
    public readonly availabilityZone?: string;
    public readonly dbInstanceIdentifier: string;
    public readonly dbSnapshotArn?: string;
    public readonly dbSnapshotIdentifier: string;
    public readonly encrypted?: boolean;
    public readonly engine?: string;
    public readonly engineVersion?: string;
    public readonly iops?: number;
    public readonly kmsKeyId?: string;
    public readonly licenseModel?: string;
    public readonly optionGroupName?: string;
    public readonly port?: number;
    public readonly snapshotType?: string;
    public readonly sourceDbSnapshotIdentifier?: string;
    public readonly sourceRegion?: string;
    public readonly status?: string;
    public readonly storageType?: string;
    public readonly vpcId?: string;

    constructor(name: string, args: SnapshotArgs) {
        super(name);
        if (args.allocatedStorage === undefined) {
            throw new Error("Property argument 'allocatedStorage' is required, but was missing");
        }
        this.allocatedStorage = args.allocatedStorage;
        if (args.availabilityZone === undefined) {
            throw new Error("Property argument 'availabilityZone' is required, but was missing");
        }
        this.availabilityZone = args.availabilityZone;
        if (args.dbInstanceIdentifier === undefined) {
            throw new Error("Property argument 'dbInstanceIdentifier' is required, but was missing");
        }
        this.dbInstanceIdentifier = args.dbInstanceIdentifier;
        if (args.dbSnapshotArn === undefined) {
            throw new Error("Property argument 'dbSnapshotArn' is required, but was missing");
        }
        this.dbSnapshotArn = args.dbSnapshotArn;
        if (args.dbSnapshotIdentifier === undefined) {
            throw new Error("Property argument 'dbSnapshotIdentifier' is required, but was missing");
        }
        this.dbSnapshotIdentifier = args.dbSnapshotIdentifier;
        if (args.encrypted === undefined) {
            throw new Error("Property argument 'encrypted' is required, but was missing");
        }
        this.encrypted = args.encrypted;
        if (args.engine === undefined) {
            throw new Error("Property argument 'engine' is required, but was missing");
        }
        this.engine = args.engine;
        if (args.engineVersion === undefined) {
            throw new Error("Property argument 'engineVersion' is required, but was missing");
        }
        this.engineVersion = args.engineVersion;
        if (args.iops === undefined) {
            throw new Error("Property argument 'iops' is required, but was missing");
        }
        this.iops = args.iops;
        if (args.kmsKeyId === undefined) {
            throw new Error("Property argument 'kmsKeyId' is required, but was missing");
        }
        this.kmsKeyId = args.kmsKeyId;
        if (args.licenseModel === undefined) {
            throw new Error("Property argument 'licenseModel' is required, but was missing");
        }
        this.licenseModel = args.licenseModel;
        if (args.optionGroupName === undefined) {
            throw new Error("Property argument 'optionGroupName' is required, but was missing");
        }
        this.optionGroupName = args.optionGroupName;
        if (args.port === undefined) {
            throw new Error("Property argument 'port' is required, but was missing");
        }
        this.port = args.port;
        if (args.snapshotType === undefined) {
            throw new Error("Property argument 'snapshotType' is required, but was missing");
        }
        this.snapshotType = args.snapshotType;
        if (args.sourceDbSnapshotIdentifier === undefined) {
            throw new Error("Property argument 'sourceDbSnapshotIdentifier' is required, but was missing");
        }
        this.sourceDbSnapshotIdentifier = args.sourceDbSnapshotIdentifier;
        if (args.sourceRegion === undefined) {
            throw new Error("Property argument 'sourceRegion' is required, but was missing");
        }
        this.sourceRegion = args.sourceRegion;
        if (args.status === undefined) {
            throw new Error("Property argument 'status' is required, but was missing");
        }
        this.status = args.status;
        if (args.storageType === undefined) {
            throw new Error("Property argument 'storageType' is required, but was missing");
        }
        this.storageType = args.storageType;
        if (args.vpcId === undefined) {
            throw new Error("Property argument 'vpcId' is required, but was missing");
        }
        this.vpcId = args.vpcId;
    }
}

export interface SnapshotArgs {
    readonly allocatedStorage?: number;
    readonly availabilityZone?: string;
    readonly dbInstanceIdentifier: string;
    readonly dbSnapshotArn?: string;
    readonly dbSnapshotIdentifier: string;
    readonly encrypted?: boolean;
    readonly engine?: string;
    readonly engineVersion?: string;
    readonly iops?: number;
    readonly kmsKeyId?: string;
    readonly licenseModel?: string;
    readonly optionGroupName?: string;
    readonly port?: number;
    readonly snapshotType?: string;
    readonly sourceDbSnapshotIdentifier?: string;
    readonly sourceRegion?: string;
    readonly status?: string;
    readonly storageType?: string;
    readonly vpcId?: string;
}

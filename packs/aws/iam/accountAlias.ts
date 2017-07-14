// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class AccountAlias extends lumi.NamedResource implements AccountAliasArgs {
    public readonly accountAlias: string;

    constructor(name: string, args: AccountAliasArgs) {
        super(name);
        if (args.accountAlias === undefined) {
            throw new Error("Property argument 'accountAlias' is required, but was missing");
        }
        this.accountAlias = args.accountAlias;
    }
}

export interface AccountAliasArgs {
    readonly accountAlias: string;
}

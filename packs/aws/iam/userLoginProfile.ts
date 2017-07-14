// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class UserLoginProfile extends lumi.NamedResource implements UserLoginProfileArgs {
    public readonly encryptedPassword?: string;
    public readonly keyFingerprint?: string;
    public readonly passwordLength?: number;
    public readonly passwordResetRequired?: boolean;
    public readonly pgpKey: string;
    public readonly user: string;

    constructor(name: string, args: UserLoginProfileArgs) {
        super(name);
        if (args.encryptedPassword === undefined) {
            throw new Error("Property argument 'encryptedPassword' is required, but was missing");
        }
        this.encryptedPassword = args.encryptedPassword;
        if (args.keyFingerprint === undefined) {
            throw new Error("Property argument 'keyFingerprint' is required, but was missing");
        }
        this.keyFingerprint = args.keyFingerprint;
        this.passwordLength = args.passwordLength;
        this.passwordResetRequired = args.passwordResetRequired;
        if (args.pgpKey === undefined) {
            throw new Error("Property argument 'pgpKey' is required, but was missing");
        }
        this.pgpKey = args.pgpKey;
        if (args.user === undefined) {
            throw new Error("Property argument 'user' is required, but was missing");
        }
        this.user = args.user;
    }
}

export interface UserLoginProfileArgs {
    readonly encryptedPassword?: string;
    readonly keyFingerprint?: string;
    readonly passwordLength?: number;
    readonly passwordResetRequired?: boolean;
    readonly pgpKey: string;
    readonly user: string;
}

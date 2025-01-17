// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Kubernetes.Types.Outputs.Core.V1
{

    /// <summary>
    /// Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
    /// </summary>
    [OutputType]
    public sealed class GlusterfsVolumeSource
    {
        /// <summary>
        /// EndpointsName is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
        /// </summary>
        public readonly string Endpoints;
        /// <summary>
        /// Path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
        /// </summary>
        public readonly string Path;
        /// <summary>
        /// ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
        /// </summary>
        public readonly bool ReadOnly;

        [OutputConstructor]
        private GlusterfsVolumeSource(
            string endpoints,

            string path,

            bool readOnly)
        {
            Endpoints = endpoints;
            Path = path;
            ReadOnly = readOnly;
        }
    }
}

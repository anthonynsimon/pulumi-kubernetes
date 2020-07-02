// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Kubernetes.Types.Inputs.Core.V1
{

    /// <summary>
    /// Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
    /// </summary>
    public class DownwardAPIProjectionArgs : Pulumi.ResourceArgs
    {
        [Input("items")]
        private InputList<Pulumi.Kubernetes.Types.Inputs.Core.V1.DownwardAPIVolumeFileArgs>? _items;

        /// <summary>
        /// Items is a list of DownwardAPIVolume file
        /// </summary>
        public InputList<Pulumi.Kubernetes.Types.Inputs.Core.V1.DownwardAPIVolumeFileArgs> Items
        {
            get => _items ?? (_items = new InputList<Pulumi.Kubernetes.Types.Inputs.Core.V1.DownwardAPIVolumeFileArgs>());
            set => _items = value;
        }

        public DownwardAPIProjectionArgs()
        {
        }
    }
}
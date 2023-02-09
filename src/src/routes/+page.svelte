<script lang="ts">
	import { DockerCompose, KeyValue, NetworkLink, Service, VolumeLink } from 'src/data/Model';
	import { stringifyDockerCompose } from 'src/data/Serializer';
	import Editor from 'src/components/Editor.svelte';


    let compose = new DockerCompose("3.1");

    compose.services = [
        {
            id:"mongo",
            image:"mongo",
            tag:"4.2",
            networkIds: [
                new NetworkLink("network1")
            ],
            ports: [
                {
                    container: 1999,
                    host: 4000
                }
            ],
            volumeIds: [
                new VolumeLink("volume1", "/mnt/data")
            ],
            environmentVariables: [
                {
                    key: "AGE",
                    value: "18"
                }
            ]
        },
        new Service("minio", "minio", "12.0"),
    ];

    compose.networks = [
        {
            id: "network1",
            name: "myCustomName",

            driver: "bridge",
            externalName: "someexternalNetwork",
            labels: [new KeyValue("Hello", "World")],
            driverOptions: [new KeyValue("Some", "Options")]
        }
    ]

    compose.volumes = [
        {
            id: "volume1",
            name: "myVolumeName",

            driver: "default",
            externalName: "somename",
            labels: [new KeyValue("hey", "world")]
        }
    ]



    let value = stringifyDockerCompose(compose);
</script>

<Editor {value} language="yaml" />
<script>
	import Editor from 'src/components/Editor.svelte';
	import { DockerCompose, Service } from 'src/data/Model';
	import { stringifyDockerCompose } from 'src/data/Serializer';


    let compose = new DockerCompose("3.1");

    compose.services = [
        new Service("mongo", "mongo", "4.2"),
        new Service("minio", "minio", "12.0"),
    ]

    let value = stringifyDockerCompose(compose);
</script>

<Editor {value} language="yaml" />

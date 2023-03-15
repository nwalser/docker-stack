<script lang="ts">
	import FileView from "src/components/FileView.svelte";

    export let stackId: string;
    export let hostUrl: string = "https://docker-stack.com";

    let fileContents = 
`mkdir ${ stackId }
cd ${ stackId }
wget ${hostUrl}/stacks/${stackId}/docker-compose -outfile "docker-compose.yml" -UseBasicParsing
docker-compose up`

</script>

<FileView fileName="Powershell" language="shell" stringFileContent={fileContents} />
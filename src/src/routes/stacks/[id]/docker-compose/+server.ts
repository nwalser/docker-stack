import { error } from '@sveltejs/kit';
import { stringifyDockerCompose } from 'src/data/stackPages/DockerComposeSerializer';
import { getStack } from 'src/data/stackPages/StackData';

export async function GET({params}) {
    let stackPage = getStack(params.id)!;
    
    if(!stackPage)
        throw error(400, 'This stack does not exist.');

    let stackString = stringifyDockerCompose(stackPage.compose)

    let response = new Response(stackString, );
    response.headers.set('Content-type', 'application/yaml');
    response.headers.set('Content-Disposition', 'attachment; filename=' + stackPage.id + '-docker-compose.yml');

    return response;
}
import { Form, useActionData, useFetcher } from '@remix-run/react';

export async function action({request, params, context}) {
  if (request.method !== 'POST') {
    throw new Error('Invalid request method');
  }
let formData = await request.formData();
  const t = await fetchSubMenu({
    params,
    request,
    context,
    formData,
  });
	console.log(JSON.stringify(request));
console.log(t)
  return t;
}

async function fetchSubMenu({params, request, context, formData}) {
	console.log(JSON.stringify(request), JSON.stringify(params), JSON.stringify(formData));
	return {test:"test"};
}

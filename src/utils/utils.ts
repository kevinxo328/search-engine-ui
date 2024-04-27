// create a function that takes a host and an endpoint
// check if the host is end with / or not, if add / to the end of the host, remove the / from the end of host
// check if the host start with https or http, if not add https to the start of the host, add https to the start of the host
// return the host + endpoint

export function getFullPath(host: string, endpoint: string) {
  if (host.endsWith("/")) {
    host = host.slice(0, -1);
  }
  if (!host.startsWith("https://") && !host.startsWith("http://")) {
    host = "https://" + host;
  }
  if (!endpoint.startsWith("/")) {
    endpoint = "/" + endpoint;
  }

  return host + endpoint;
}

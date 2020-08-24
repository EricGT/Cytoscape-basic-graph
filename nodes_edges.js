// Elements JSON - https://js.cytoscape.org/#notation/elements-json
// JSON used to load elements into Cytoscape.js
// The elements JSON may be keyed by group such as nodes and edges.

var NodesEdges = {

    nodes: [
        {
            data: { id: 'a' }
        },

        {
            data: { id: 'b' }
        }
    ],

    edges: [
        {
            data: { id: 'ab', source: 'a', target: 'b' }
        }
    ]

};
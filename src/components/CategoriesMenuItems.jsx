import { BsCarFront, BsPhone } from "react-icons/bs";

export const categoriesData = [
    {
        title:'Electronics',
        id:'electronics',
        icon:<BsPhone/>,
        subcategories:[
            {title:'1sub1', subsubcategory:[
                {title:'11subsub1', url:'link'},
                {title:'11subsub2', url:'link'}
            ]},
            {title:'1sub2', subsubcategory:[
                {title:'12subsub1', url:'link'},
                {title:'12subsub2', url:'link'}
            ]}
        ]
    },
    {
        title:'Auto and Parts',
        id:'autoAndParts',
        icon:<BsCarFront/>,
        subcategories:[
            {title:'2sub1', subsubcategory:[
                {title:'21subsub1', url:'link'},
                {title:'21subsub2', url:'link'}
            ]},
            {title:'2sub2', subsubcategory:[
                {title:'22subsub1', url:'link'},
                {title:'22subsub2', url:'link'}
            ]}
        ]
    }
];
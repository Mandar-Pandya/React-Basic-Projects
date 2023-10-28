function customRender(reactElement,Container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])

    }
    Container.appendChild(domElement)
}



const mainContainer = document.querySelector('#root')

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click Me'
}

customRender(reactElement,mainContainer)
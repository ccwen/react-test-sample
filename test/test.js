var assert=require("assert");
var jsdom=require("jsdom");
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.parentWindow;
global.navigator=document.parentWindow.navigator;

//must have window, document , navigator before requiring React or React component.
//owe to https://gist.github.com/PrototypeAlex/0a2b9a5c3e86ee0c8ed3

var Component=require("..");

var React=require("react/addons")
var TestUtils=React.addons.TestUtils;

var shallowrenderer=TestUtils.createRenderer(); 

//read this https://facebook.github.io/react/docs/test-utils.html
describe("Testing React Component",function(){
	it("shallow",function(){
		shallowrenderer.render(React.createElement(Component,{label:"xyz"}));
		var comp=shallowrenderer.getRenderOutput()
		assert.equal(comp.type,"div");
		assert.equal(comp.props.children[0].type,"span");
		assert.equal(comp.props.children[1].type,"button");
	});

	it("testing click",function(){
		var c=TestUtils.renderIntoDocument(React.createElement(Component,{label:"xyz"}));
		var btn=React.findDOMNode(c.refs.btn);
		var text=React.findDOMNode(c.refs.text);

		assert.equal(text.innerHTML,"hello");
		TestUtils.Simulate.click(btn);

		// TestUtils.Simulate.{eventName}(DOMElement element, object eventData)
		// var node = React.findDOMNode(this.refs.input);
		// React.addons.TestUtils.Simulate.click(node);
		// React.addons.TestUtils.Simulate.change(node, {target: {value: 'Hello, world'}});
		// React.addons.TestUtils.Simulate.keyDown(node, {key: "Enter"});

		assert.equal(text.innerHTML,"world");
	});


})	

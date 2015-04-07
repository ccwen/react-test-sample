var React=require("react/addons");
var E=React.createElement;

var Component=React.createClass({
	getInitialState:function() {
		return {content:"hello"};
	}
	,click:function() {
		this.setState({content:"world"});
	}
	,render:function(){
		return E("div",{},
				[E("span",{ref:"text",key:0},this.state.content),
				E("button",{ref:"btn",key:1,onClick:this.click},this.props.label)]

		);
	}
});
module.exports=Component;
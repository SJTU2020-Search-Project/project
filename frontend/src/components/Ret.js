import React from "react";
import '../css/result.css';

class Ret extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            classname: "leave"
        }
    }

    warpTag = (content) => {
        let keyword = content.substr(content.toLowerCase().indexOf(this.props.wd.toLowerCase()), this.props.wd.length);
        let re = new RegExp(this.props.wd, "gi");
        return content.replace(re, `<span style="color:#CC0000;">${keyword}</span>`);
    };

    randomUrl = (content) => {
        return content + '?' + Math.ceil(Math.random()*Number.MAX_SAFE_INTEGER);
    };

    changeClassname = () => {
        if (this.state.classname === "leave") this.setState({classname: "entry"});
        else this.setState({classname: "leave"});
    };

    render() {

        const {info} = this.props;

        return (
            <div className={this.state.classname} onMouseEnter={this.changeClassname} onMouseLeave={this.changeClassname}>
                <div className="content">
                    <a href={this.randomUrl(info.link)} className="resultTitle" target="_blank" rel="noopener noreferrer"
                       dangerouslySetInnerHTML={{__html: this.warpTag(info.title)}}/>
                    <p className="resultContent">{info.content}</p>
                    <a href={this.randomUrl(info.link)} className="resultUrl" target="_blank" rel="noopener noreferrer">{info.url}</a>
                </div>
            </div>
        );
    }

}

export default Ret;
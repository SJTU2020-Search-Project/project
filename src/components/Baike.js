import React from "react";
import '../css/baike.css';

class Baike extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            classname: "container-leave"
        }
    }

    warpTag = (content) => {
        let keyword = content.substr(content.toLowerCase().indexOf(this.props.wd.toLowerCase()), this.props.wd.length);
        let re = new RegExp(this.props.wd, "gi");
        return content.replace(re, `<span style="color:#CC0000;">${keyword}</span>`);
    };

    changeClassname = () => {
        if (this.state.classname === "container-leave") this.setState({classname: "container-entry"});
        else this.setState({classname: "container-leave"});
    };

    render() {

        const {info} = this.props;

        if (Object.keys(info).length > 1)
            return (
            <div className={this.state.classname} onMouseEnter={this.changeClassname} onMouseLeave={this.changeClassname}>
                <img src={info.image} alt="Loading..."/>
                <div className="baike-title">
                    <div>
                        <a href={"../wiki?wd="+info.name} className="wiki-name" dangerouslySetInnerHTML={{__html: this.warpTag(info.name)}}/>
                    </div>
                    <div>
                        <p className="wiki-score">豆瓣评分: {info.score}</p>
                    </div>
                </div>
                <div className="summary">
                    <p className="para">{info.summary}</p>
                </div>
                <div className="basic-info">
                    <dl className="basic-info-left">
                        <dt className="basicInfo-name">导演</dt>
                        <dd className="basicInfo-value">{info.value[0]}</dd>
                        <dt className="basicInfo-name">类型</dt>
                        <dd className="basicInfo-value">{info.value[2]}</dd>
                        <dt className="basicInfo-name">语言</dt>
                        <dd className="basicInfo-value">{info.value[4]}</dd>
                        <dt className="basicInfo-name">片长</dt>
                        <dd className="basicInfo-value">{info.value[6]}</dd>
                    </dl>
                    <dl className="basic-info-right">
                        <dt className="basicInfo-name">主演</dt>
                        <dd className="basicInfo-value">{info.value[1]}</dd>
                        <dt className="basicInfo-name">国家/地区</dt>
                        <dd className="basicInfo-value">{info.value[3]}</dd>
                        <dt className="basicInfo-name">上映日期</dt>
                        <dd className="basicInfo-value">{info.value[5]}</dd>
                    </dl>
                </div>
            </div>
        );
        else return (
            <div className="hidden">

            </div>
        );
    }

}

export default Baike;
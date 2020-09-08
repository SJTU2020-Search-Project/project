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

    score = (rating) => {
        if (rating < 0) return "暂无";
        else return rating;
    };

    render() {

        const {info} = this.props;

        if (Object.keys(info).length > 1)
            return (
            <div className={this.state.classname} onMouseEnter={this.changeClassname} onMouseLeave={this.changeClassname}>
                <img src={info.image} alt="Loading..."/>
                <div className="baike-title">
                    <div>
                        <a href={"../wiki/"+info.movieId} className="wiki-name" dangerouslySetInnerHTML={{__html: this.warpTag(info.title)}}/>
                    </div>
                    <div>
                        <p className="wiki-score">豆瓣评分: {this.score(info.rating)}</p>
                    </div>
                </div>
                <div className="summary">
                    <p className="para">{info.summary}</p>
                </div>
                <div className="basic-info">
                    <dl className="basic-Info-left">
                        <dt className="basicInfo-name">导演</dt>
                        <dd className="basicInfo-value">{info.dir}</dd>
                        <dt className="basicInfo-name">类型</dt>
                        <dd className="basicInfo-value">{info.genre}</dd>
                        <dt className="basicInfo-name">语言</dt>
                        <dd className="basicInfo-value">{info.language}</dd>
                        <dt className="basicInfo-name">片长</dt>
                        <dd className="basicInfo-value">{info.runtime}</dd>
                    </dl>
                    <dl className="basic-Info-right">
                        <dt className="basicInfo-name">主演</dt>
                        <dd className="basicInfo-value">{info.actors}</dd>
                        <dt className="basicInfo-name">国家/地区</dt>
                        <dd className="basicInfo-value">{info.nation}</dd>
                        <dt className="basicInfo-name">上映日期</dt>
                        <dd className="basicInfo-value">{info.date}</dd>
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
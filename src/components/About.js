import React from 'react';
import './About.styles.css';
class About extends React.Component {
    render () {
        return (
            <div className="jumbotron">
                <p>
                    <span id="logoText">Meeting Together</span> - A unique opportunity to make new acquaintances <span className="glyphicon glyphicon-user iconMeet"></span> , have fun <span className="glyphicon glyphicon-glass iconMeet"></span> , travel together <span className="glyphicon glyphicon-globe iconMeet"></span> , learn something new <span className="glyphicon glyphicon-user iconMeet"></span> ,
                     have fun <span className="glyphicon glyphicon-glass iconMeet"></span> , travel together <span className="glyphicon glyphicon-bullhorn iconMeet"></span> , Cognize nature <span className="glyphicon glyphicon-tent iconMeet"></span> <span className="glyphicon glyphicon-tree-conifer iconMeet"></span>, become a best friend, and maybe more than a friend...<span className="glyphicon glyphicon-heart iconMeet"></span>
                </p>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="thumbnail">
                            <img src="http://sochi360.ru/wp-content/uploads/2014/09/2X0B3669-Panorama22.jpg" alt="..."/>
                            <div className="caption">
                                <h3 className="headerAbout">Organize an unforgettable weekend out of town</h3>
                                <p>This trip will forever go down in the history of your life.Be the leader of this fun.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="thumbnail">
                            <img src="https://ak9.picdn.net/shutterstock/videos/3843125/thumb/2.jpg?i10c=img.resize(height:160)" alt="..." id="friendsmeeting"/>
                            <div className="caption">
                                <h3 className="headerAbout">Organize a summer meeting of classmates</h3>
                                <p>Take the initiative, gather classmates in this beautiful summer evening</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="thumbnail">
                            <img src="http://sfoot.ru/images/gl4.jpg" alt="..." id="footbal"/>
                            <div className="caption">
                                <h3 className="headerAbout">Find new friends by hobby</h3>
                                <p>Be the best .... try to be better .... respect new acquaintances</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="thumbnail">
                            <img src="https://performancebikeblog.files.wordpress.com/2012/05/2010_0ldlystraride.jpg" alt="..."/>
                            <div className="caption">
                                <h3 className="headerAbout">Become an organizer of a Bicycle Tour</h3>
                                <p>Spend time climbing up the hill - surrounded by bicyclists. Burn calories, have fun. Increase the distance</p>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default About;
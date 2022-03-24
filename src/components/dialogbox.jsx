import React from "react";
import { Spring, animated, easings } from 'react-spring';

class DialogBox extends React.Component {
    render() { 
        return (
        <div>
            <div className="boxBackground">
            <Spring
                from={{ opacity: 0, marginTop: -200 }}
                to={[
                { opacity: 1, marginTop: 0 },
                ]}
                config={{duration: 500, easing: easings.easeInCubic}}>
                {styles => (<animated.div style={styles} className="box">{this.props.children}</animated.div>)}
            </Spring>
            </div>
        </div>)
    }
}

export default DialogBox;
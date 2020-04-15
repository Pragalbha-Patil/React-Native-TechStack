import React, {Component} from 'react';
import {Text, TouchableOpacity, View, LayoutAnimation, UIManager} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from '../common';
import * as actions from '../actions';

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true); // for LayoutAnimation.spring() to work in Android

class ListItem extends Component{
    componentDidUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const {library, expanded} = this.props;

        if(expanded) {
            return (
                <CardSection>
                    <Text style={{flex: 1}}>
                        {library.item.description}
                    </Text>
                </CardSection>
            );
        }
    }


    render() {

        const {id, title} = this.props.library.item;

        return (
            <View>
                <TouchableOpacity
                    onPress={() => this.props.selectLibrary(id)}
                >
                    <CardSection>
                        <Text style={styles.titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id;
    return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);
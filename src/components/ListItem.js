import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from '../common';
import * as actions from '../actions';

class ListItem extends Component{

    renderDescription() {
        if(this.props.library.item.id === this.props.selectedLibraryId) {
            return (
                <Text>
                    {this.props.library.item.description}
                </Text>
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

const mapStateToProps = state => {
    console.log(state.selectedLibraryId);
    return { selectedLibraryId: state.selectedLibraryId };
}

export default connect(mapStateToProps, actions)(ListItem);
import React, {Component} from 'react';
import {Text, FlatList} from 'react-native';
import {connect} from "react-redux";
import ListItem from './ListItem';

class LibraryList extends Component{

    // renderItem() {
    //     return (
    //         <CardSection>
    //             <Text>{this.props.libraries}</Text>
    //         </CardSection>
    //     );
    // }

    render() {

        const DATA = JSON.parse(JSON.stringify(this.props.libraries()));
        // console.log(this.props.libraries()) // props will have the librarylist
        return (
            <FlatList
                data={DATA}
                //renderItem={(library) => console.log(library.item.title)}
                renderItem={ (library) => <ListItem library={library} /> }
                keyExtractor={library => library.id.toString()}
            />
        );
    }
}

// const mapStateToProps = state => {
//   return { libraries: state.libraries };
// };
function mapStateToProps(state) {
    // console.log(state);
    const { libraries } = state
    return {
        libraries
    }
}

export default connect(mapStateToProps)(LibraryList);
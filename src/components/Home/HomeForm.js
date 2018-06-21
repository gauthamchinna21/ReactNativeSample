//import liraries
import React, { Component } from 'react';
import {
    ActivityIndicator,
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    View,
} from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';

// Example component for section:headerComponent
const CustomSectionHeader = () => (
    <View>
      <Text>Custom header!</Text>
    </View>
  );


// create a component
class HomeForm extends Component {
    render() {

        return (
            <ScrollView contentContainerStyle={styles.stage}>

                <TableView>
                    <Section header="Image" footer="A Footer">
                        <Cell
                            cellStyle="RightDetail"
                            title="RightDetail"
                            detail="Detail"
                            image={
                                <Image
                                    style={{ borderRadius: 5 }}
                                    source={{
                                        uri: 'https://facebook.github.io/react/img/logo_og.png',
                                    }}
                                />
                            }
                        />
                    </Section>
                    <Section header="CUSTOMCELLS">
                        <Cell
                            onPress={() => console.log('Heyho!')}
                            contentContainerStyle={{ alignItems: 'flex-start', height: 60 }}
                            cellContentView={
                                <Text style={{ flex: 1, fontSize: 16 }}>
                                    Custom height with Cell-Component
                                </Text>
                            }
                        />
                    </Section>
                    <Section headerComponent={<CustomSectionHeader />}>
                        <Cell cellStyle="Basic" title="Section uses prop headerComponent" />
                    </Section>
                    <Section footer="All rights reserved.">
                        <Cell title="Help / FAQ" titleTextColor="#007AFF" onPress={() => console.log('open Help/FAQ')} />
                        <Cell title="Contact Us" titleTextColor="#007AFF" onPress={() => console.log('open Contact Us')} />
                    </Section>
                </TableView>
            </ScrollView>
        );
    }

}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    stage: {
        backgroundColor: '#EFEFF4',
        paddingTop: 20,
        flex: 1
    },
});

//make this component available to the app
export default HomeForm;


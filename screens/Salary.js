import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Alert, } from 'react-native';
import { StyledContainer, InnerContainer, OLPic, TableStyled, PageTitle, StyledButton, ButtonText, Line } from '../components/styles';
import { Colors } from '../components/styles';
const { brand, darkLight, black, primary, secondary, neon_blur, light_brand } = Colors;
import { DataTable } from 'react-native-paper';

//note : justifyContent: 'center' : theo height || alignItems: 'center' : theo width || alignItems: 'center'
//note : 2 cai tren chi co tac dung voi the cha chua no || ko dung dc trong ScrollView

const Salary = ({ navigation }) => {
    return (
        <StyledContainer >
            <InnerContainer>
                <OLPic resizeMode="cover" source={require('../assets/image/br3.png')} ></OLPic>
                <TableStyled style={styles.TouchableImage} >
                    <PageTitle>Revenue</PageTitle>
                    <ScrollView style={styles.scrollView}>
                        <DataTable style={styles.container1}>
                            <DataTable.Header style={styles.tableHeader}>
                                <DataTable.Title >Staff Name</DataTable.Title>
                                <DataTable.Title style={styles.text}>Date</DataTable.Title>
                                <DataTable.Title style={styles.text}>Time</DataTable.Title>
                                <DataTable.Title style={styles.text}>Total</DataTable.Title>
                            </DataTable.Header>
                            <DataTable.Row>
                                <DataTable.Cell>A Nguyễn</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >11/11/02</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >8h</DataTable.Cell>
                                <DataTable.Cell style={styles.text}>2300$</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>A Nguyễn</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >11/11/02</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >8h</DataTable.Cell>
                                <DataTable.Cell style={styles.text}>2300$</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>A Nguyễn</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >11/11/02</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >8h</DataTable.Cell>
                                <DataTable.Cell style={styles.text}>2300$</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>A Nguyễn</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >11/11/02</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >8h</DataTable.Cell>
                                <DataTable.Cell style={styles.text}>2300$</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>A Nguyễn</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >11/11/02</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >8h</DataTable.Cell>
                                <DataTable.Cell style={styles.text}>2300$</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>A Nguyễn</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >11/11/02</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >8h</DataTable.Cell>
                                <DataTable.Cell style={styles.text}>2300$</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>A Nguyễn</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >11/11/02</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >8h</DataTable.Cell>
                                <DataTable.Cell style={styles.text}>2300$</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>A Nguyễn</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >11/11/02</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >8h</DataTable.Cell>
                                <DataTable.Cell style={styles.text}>2300$</DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>
                    </ScrollView>
                    <Line />
                    <View style={{ flexDirection: 'row', marginHorizontal: '5%', justifyContent: 'space-between',marginBottom:"2%" }} >
                        <Text style={{ textTransform: 'uppercase', fontSize: 20, fontWeight: 'bold' }}>Total:</Text>
                        <Text style={{ textTransform: 'uppercase', fontSize: 20, fontWeight: 'bold' }}>50$</Text>
                    </View>
                    <StyledButton
                        onPress={() => {
                            navigation.navigate('Home')
                        }} >
                        <ButtonText>
                            Submit
                        </ButtonText>
                    </StyledButton>
                </TableStyled>
            </InnerContainer>
        </StyledContainer>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primary,
    },
    container1: {
        borderRadius: 10,
        backgroundColor: primary,
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    TouchableImage: {
        elevation: 1,
        padding: 10,
        backgroundColor: primary,
        shadowColor: black,
        shadowOpacity: .5,
        shadowRadius: 2,
        shadowOffset: {
            height: 2,
            width: 2
        }
    },
    text: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
})
export default Salary
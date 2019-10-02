import React from 'react'
import { Text, View, Image } from 'react-native'
import { Button, Icon } from 'react-native-elements'

export default class List extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', border: '4' }}>
                    <Text style={{fontSize:30, fontStyle:'italic', textAlign:'center', marginTop:5,
                        textDecorationLine:'underline'}}>
                        Liverpool Kembali Memperlihatkan Taringnya
                    </Text>
                    <Image source={require('../../asset/images/gambar.png')}/>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', border: '4' }}>
                    <Text style={{textAlign:'center'}}>
                        Liverpool Akhirnya berhasil mendapatkan piala champion setelah sekian lama
                        , dalam dekade terakhir ia berhasil mencapai pencapaian terbaik
                    </Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', border: '4' }}>
                    <Button
                        icon={
                            <Icon name={"home"} size={30} color={'green'}/>
                        } title={'Home'} onPress={() => this.props.navigation.navigate('Home')}/>
                </View>
            </View>
        );
    }
}

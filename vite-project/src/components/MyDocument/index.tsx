import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import { Font } from '@react-pdf/renderer';

Font.register({
    family: "Roboto",
    src:
      "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf"
});


const styles = StyleSheet.create({
    page: {
        fontFamily: 'Roboto',
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 10,
        padding: 10,
    }
});

interface MyDocumentProps {
  name: string;
  email: string;
  text: string;
  picture: string;
}

const MyDocument: React.FC<MyDocumentProps> = ({ name, email, text, picture }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>Данные из формы</Text>
                </View>
                <View style={styles.section}>
                    <Text>Name: {name}</Text>
                </View>
                <View style={styles.section}>
                    <Text>Email: {email}</Text>
                </View>
                <View style={styles.section}>
                    <Text>Message: {text}</Text>
                </View>
                <View style={styles.section}>
                    {picture && <Image src={picture}  />}
                </View>
            </Page>
        </Document>
    );
};

export default MyDocument;

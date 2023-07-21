import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

export default function RenderedPDF() {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#EFEFEF",
      fontSize: 10,
    },
  });

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View
          style={{
            flexDirection: "column",
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#333",
              color: "#EFEFEF",
              padding: 10,
            }}
          >
            <Text>Section #1</Text>
          </View>
          <View
            style={{
              flex: 3,

              padding: 10,
            }}
          >
            <Text>Section #2</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            border: "1px solid black",
            padding: 10,
            flex: 4,
          }}
        >
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
}

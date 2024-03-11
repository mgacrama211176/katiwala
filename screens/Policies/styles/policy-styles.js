import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    /* Styles for Both Terms of Service and Privacy Policy */
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
    },
    header: {
        marginTop: 20,
        marginBottom: 10,
        alignItems: "center",
    },
    headerText: {
        fontSize: 24,
        fontFamily: "RobotoSlab_400Regular",
        textDecorationLine: "underline",
        textDecorationColor: "#437456",
    },
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    bodyContent: {
        width: "90%",
        backgroundColor: "#E5E4E2",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    sectionContainer: {
        marginVertical: 15,
    },
    sectionTitle: {
        fontSize: 19,
        fontFamily: "RobotoSlab_400Regular",
        marginBottom: 8,
    },
    sectionText: {
        fontSize: 15,
        textAlign: "justify",
    },
    buttonContainer: {
        marginHorizontal: 20,
        marginBottom: 10,
        gap: 8,
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontSize: 18,
    },
    backButton: {
        backgroundColor: "red",
        paddingHorizontal: 22,
        paddingVertical: 10,
        borderRadius: 10,
    },
    /* Styles only applicable for Terms of Service Screen */
    privacyPolicyLinkText: {
        color: "#437456",
        textDecorationLine: "underline",
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "italic",
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#437456",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    checkmark: {
        color: "#437456",
    },
    checkboxText: {
        fontSize: 15,
    },
    acceptButton: {
        backgroundColor: "#437456",
        paddingHorizontal: 22,
        paddingVertical: 10,
        borderRadius: 10,
    },
})

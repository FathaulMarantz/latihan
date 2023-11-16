var db = firebase.firestore();
var date = new Date();
var tahun = date.getFullYear().toString();
// Get the document reference from Firestore
var docRef = db.collection("page_views").doc(tahun);
var data;
    // Get the current value from Firestore
    await docRef.get().then(function(doc) {
        if (doc.exists) {
            // Document exists, update the count
            var bulan = (date.getMonth()+1).toString();
            data = doc.data();
            data[bulan] += 1;

            docRef.update(data);
        } else {
            // Document doesn't exist, create it with count 1
            var bulan = (date.getMonth()+1).toString();
            data = {
                "1":0,
                "2":0,
                "3":0,
                "4":0,
                "5":0,
                "6":0,
                "7":0,
                "8":0,
                "9":0,
                "10":0,
                "11":0,
                "12":0
            };
            data[bulan] = 1;
            docRef.set(data);
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
// Run this script to rename all the artboards to just use the artboard number,
// which is useful for when you export as PNG and want to maintain the order
// for presentation purposes.
// Jeremy Knudsen

function renameArtboards() {
    var docRef = app.activeDocument,
        aB = docRef.artboards,
        i = aB.length,
        aBPrefix = "";
    for (i; i--;) {
        if (i < 9) {
            aBPrefix = "0" + (i + 1);
        } else {
            aBPrefix = (i + 1);
        }
        aB[i].name = aBPrefix;
    }
}
renameArtboards();

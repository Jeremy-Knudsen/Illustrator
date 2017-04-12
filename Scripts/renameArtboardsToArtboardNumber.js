// Run this script to rename all the artboards to be the artboard number,
// which is useful for exporting a series of PNGs, in which the order must be maintained
//
// Use it freely!
// Jeremy Knudsen ( jeremyknudsen@outlook.com )

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

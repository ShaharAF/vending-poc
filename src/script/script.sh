!/bin/bash
FOLDER_NAME='app repo'
REPO_NAME='android-template'
MODULE_NAME='app'
APK_FILE_NAME=$MODULE_NAME-debug.apk
CUR_PACKAGE_NAME='com.example.androidtemplate'

get_dir_hierarchy_from_package(){
    dir_hierarchy=`echo $1 | tr . /` 
}

get_dir_hierarchy_from_package $CUR_PACKAGE_NAME

change_package_name(){
    echo "change"
    # 1- rename src folder 
    mv "src/com/lulo/scrabble/dico"src/com/lulo/scrabble/dicopro

    # 2- replace references to package in Java, XML and CFG (proguard) files 
    find . \( -name "*xml" -o -name "*.java" -o -name "*.cfg" \) -print0 | xargs -0 sed -ri 's/scrabble.dico/scrabble.dicopro/g'

    # 3- change the application name
    find . -name "*.xml" -print0 | xargs -0 sed -ri 's/\(Free\)/Pro/g'  
}

#remove directory if exists
echo "Deleting $FOLDER_NAME folder..."
rm -rf "$FOLDER_NAME"

#create and move to directory
echo "Creating $FOLDER_NAME folder..."
mkdir "$FOLDER_NAME"
cd "$FOLDER_NAME"

#clone git repo and go to the cloned repository folder 
git clone "https://github.com/ShaharAF/$REPO_NAME.git"
cd "$REPO_NAME"

change_package_name

#build apk
gradle assembleDebug

#get the apk
cd "$MODULE_NAME/build/outputs/apk/debug/"
mv "$APK_FILE_NAME" "../../../../../../.."
echo "Moving $APK_FILE_NAME to the root folder..."
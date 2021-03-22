var package = require('./package.json');
var gulp = require('gulp'); //require('gulp-help')(require('gulp'));
var concat = require('gulp-concat');
var del = require('del');
var dom  = require('gulp-dom');
//var gh_pages = require('gulp-gh-pages');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var zip = require('gulp-zip');

var dist = 'dist';
var base_name = 'icn3d-' + package.version;


//  'Removes the dist directory, for a clean build',
gulp.task('clean',
  function() {
    return del([dist]);
  });

//  'Copy three.min.js into dist/libs',
gulp.task('libs-three',
  //gulp.series('clean'),
  function() {
    return gulp.src([
            "node_modules/three/build/three.min.js"
        ])
        .pipe(gulp.dest(dist + '/lib'))
        .pipe(rename('three_0.103.0.min.js'))
        .pipe(gulp.dest(dist + '/lib'));
  });

//  'Copy jquery.min.js into dist/libs',
gulp.task('libs-jquery',
  //gulp.series('clean'),
  function() {
    return gulp.src([
            "node_modules/jquery/dist/jquery.min.js"
        ])
        .pipe(gulp.dest(dist + '/lib'))
        .pipe(rename('jquery-3.5.0.min.js'))
        .pipe(gulp.dest(dist + '/lib'));
  });

//  'Copy jquery-ui.min.js into dist/libs',
gulp.task('libs-jquery-ui',
  //gulp.series('clean'),
  function() {
    return gulp.src([
            "node_modules/jquery-ui/jquery-ui.min.js"
        ])
        .pipe(gulp.dest(dist + '/lib'))
        .pipe(rename('jquery-ui-1.12.1.min.js'))
        .pipe(gulp.dest(dist + '/lib'));
  });

//  'Copy jquery-ui.min.css into dist/libs',
gulp.task('libs-jquery-ui-css',
  //gulp.series('clean'),
  function() {
    return gulp.src([
            "node_modules/jquery-ui/themes/ui-lightness/jquery-ui.min.css"
        ])
        .pipe(gulp.dest(dist + '/lib'))
        .pipe(rename('jquery-ui-1.12.1.min.css'))
        .pipe(gulp.dest(dist + '/lib'));
  });

//  'Copy jquery-ui images into dist/libs',
gulp.task('libs-jquery-ui-images1',
  //gulp.series('clean'),
  function() {
    return gulp.src([
            "node_modules/jquery-ui/themes/ui-lightness/images"
        ])
        .pipe(gulp.dest(dist + '/lib'));
  });

//  'Copy jquery-ui images into dist/libs',
gulp.task('libs-jquery-ui-images2',
  //gulp.series('clean'),
  function() {
    return gulp.src([
            "node_modules/jquery-ui/themes/ui-lightness/images/**"
        ])
        .pipe(gulp.dest(dist + '/lib/images'));
  });

//  'Copy images to show secondary structures into dist/ssimages',
gulp.task('ssimages',
  //gulp.series('clean'),
  function() {
    return gulp.src([
            "ssimages/**"
        ])
        .pipe(gulp.dest(dist + '/ssimages'));
  });

//  'Copies several files as-is into dist, including source css and various metadata files.',
gulp.task('copy',
  //gulp.series('clean'),
  function() {
    return gulp.src([
            'LICENSE',
            'README.md'
        ])
        .pipe(gulp.dest(dist));
  });

/*
//  'Copy and rename css files',
gulp.task('copy-rename1',
  //gulp.series('clean'),
  function() {
    return gulp.src([
            "css/icn3d_simple_ui.css"
        ])
        .pipe(gulp.dest(dist))
        .pipe(rename('icn3d_simple_ui_' + package.version + '.css'))
        .pipe(gulp.dest(dist));
  });
*/

//  'Copy and rename css files',
gulp.task('copy-rename2',
  //gulp.series('clean'),
  function() {
    return gulp.src([
            "css/icn3d_full_ui.css",
            "src/color-pick/color-picker.css"
        ])
        .pipe(concat('icn3d_full_ui.css'))
        .pipe(gulp.dest(dist))
        .pipe(rename('icn3d_full_ui_' + package.version + '.css'))
        .pipe(gulp.dest(dist));
  });

// Helper function to create a gulp task to concatenate and minify
// simple and full
//      'Concat and minify the ' + name + ' javascript',
function make_js_task(name, src) {
    gulp.task("src-js-" + name,
      //gulp.series('clean'),
      function() {
        return gulp.src(src)
            .pipe(concat('icn3d_' + name + '_ui.js'))
            .pipe(gulp.dest(dist))
            .pipe(uglify())
            .pipe(rename({ extname: '.min.js' }))
            .pipe(gulp.dest(dist))
            .pipe(rename('icn3d_' + name + '_ui_' + package.version + '.min.js'))
            .pipe(gulp.dest(dist))
            .pipe(rename(name + '_ui_all.min.js'))
            .pipe(gulp.dest(dist));
      });
}

// These source JavaScript files are common to both simple and full
var common_js = [
    "src/utils/Detector.js",
    "src/trackball/TrackballControls.js",
    "src/trackball/OrthographicTrackballControls.js",
    "src/Projector.js",
    "src/mmtf_es5.js",
    "src/shader/NGL_Shaders.js",
    "src/shader/SphereImpostor.frag",
    "src/shader/SphereImpostor.vert",
    "src/shader/CylinderImpostor.frag",
    "src/shader/CylinderImpostor.vert",
    "src/shader/SphereInstancing.frag",
    "src/shader/SphereInstancing.vert",
    "src/shader/CylinderInstancing.frag",
    "src/shader/CylinderInstancing.vert",
    "src/shader/Instancing.frag",
    "src/shader/Instancing.vert",
    "src/icn3d/icn3d.js",
    "src/icn3d/addHlObjects.js",
    "src/icn3d/addResiudeLabels.js",
    "src/icn3d/centerAtoms.js",
    "src/icn3d/centerSelection.js",
    "src/icn3d/getAtomsWithinAtom.js",
    "src/icn3d/getChainsFromAtoms.js",
    "src/icn3d/getExtent.js",
    "src/icn3d/getFirstAtomObj.js",
    "src/icn3d/getNeighboringAtoms.js",
    "src/icn3d/getResiduesFromAtoms.js",
    "src/icn3d/hashOperation.js",
    "src/icn3d/hexToRgb.js",
    "src/icn3d/icn3dInit.js",
    "src/icn3d/interHbond.js",
    "src/icn3d/interPiHalogen.js",
    "src/icn3d/interSaltbridge.js",
    "src/icn3d/loadpdb.js",
    "src/icn3d/other.js",
    "src/icn3d/rayCaster.js",
    "src/icn3d/resetOrientation.js",
    "src/icn3d/residueAbbr2Name.js",
    "src/icn3d/residueName2Abbr.js",
    "src/icn3d/rotate.js",
    "src/icn3d/setCenter.js",
    "src/icn3d/setControl.js",
    "src/icn3d/setOutlineColor.js",
    "src/icn3d/setPc1Axes.js",
    "src/icn3d/setRotation.js",
    "src/icn3d/setWidthHeight.js",
    "src/icn3d/showPicking.js",
    "src/icn3d/translate.js",
    "src/icn3d/zoom.js",
    "src/icn3d/zoominSelection.js",

    "src/icn3d/draw/applySymd.js",
    "src/icn3d/draw/buildAxes.js",
    "src/icn3d/draw/createBox.js",
    "src/icn3d/draw/createBrick.js",
    "src/icn3d/draw/createCurveSub.js",
    "src/icn3d/draw/createCurveSubArrow.js",
    "src/icn3d/draw/createCylinder.js",
    "src/icn3d/draw/createLineRepresentation.js",
    "src/icn3d/draw/createRepresentationSub.js",
    "src/icn3d/draw/createSingleLine.js",
    "src/icn3d/draw/createSphere.js",
    "src/icn3d/draw/createStickRepresentation.js",
    "src/icn3d/draw/createStrand.js",
    "src/icn3d/draw/createStrip.js",
    "src/icn3d/draw/createSurfaceRepresentation.js",
    "src/icn3d/draw/createTube.js",
    "src/icn3d/draw/drawCartoonNucleicAcid.js",
    "src/icn3d/draw/impostor.js",
    "src/icn3d/draw/instancing.js",
    "src/icn3d/draw/makeTextSprite.js",
    "src/icn3d/draw/prepareStrand.js",
    "src/icn3d/draw/subdivide.js",

    "src/icn3d/display/alternateStructures.js",
    "src/icn3d/display/applyCenterOptions.js",
    "src/icn3d/display/applyClbondsOptions.js",
    "src/icn3d/display/applyDisplayOptions.js",
    "src/icn3d/display/applyMapOptions.js",
    "src/icn3d/display/applyOtherOptions.js",
    "src/icn3d/display/applySsbondsOptions.js",
    "src/icn3d/display/applyTransformation.js",
    "src/icn3d/display/draw.js",
    "src/icn3d/display/interaction.js",
    "src/icn3d/display/rebuildScene.js",
    "src/icn3d/display/render.js",
    "src/icn3d/display/setAtomStyleByOptions.js",
    "src/icn3d/display/setCamera.js",
    "src/icn3d/display/setColorByOptions.js",
    "src/icn3d/display/setFog.js",
    "src/icn3d/display/showGlycans.js",

    "src/utils/canvas-to-blob.js",
    "src/utils/FileSaver.js"
];

//var simple_js = [
//    "src/icn3d/display/display_simple.js"
//];

var full_js = [
    "src/surface/marchingcube.js",
    "src/surface/ProteinSurface4.js",
    "src/surface/setupsurface.js",
    "src/surface/ElectronMap.js",
    "src/surface/setupmap.js",
    "src/utils/rmsd_supr.js",
//    "src/icn3d/draw/drawing_full.js",
//    "src/icn3d/display/display_full.js"
//    "src/icn3d/other_full.js"
];

//var common_uijs = [
//    "src/icn3dui/common_full_simple.js",
//    "src/icn3dui/parsers/mmcif_mmdb_parser.js",
//    "src/icn3dui/parsers/mmtf_parser.js",
//    "src/icn3dui/parsers/pdb_parser.js",
//    "src/icn3dui/parsers/sdf_parser.js"
//];

var full_uijs = [
    "src/icn3dui/icn3dui.js",
    "src/icn3dui/addChainLabels.js",
    "src/icn3dui/addLabel.js",
    "src/icn3dui/addLine.js",
    "src/icn3dui/atoms2residues.js",
    "src/icn3dui/atoms2spec.js",
    "src/icn3dui/backForward.js",
    "src/icn3dui/calculateArea.js",
    "src/icn3dui/closeDialogs.js",
    "src/icn3dui/common_full_simple.js",
    "src/icn3dui/exportCustomAtoms.js",
    "src/icn3dui/exportInteractions.js",
    "src/icn3dui/full_ui.js",
    "src/icn3dui/getAtomPDB.js",
    "src/icn3dui/getAtomsFromSet.js",
    "src/icn3dui/getGraphLinks.js",
    "src/icn3dui/getLinkToStructureSummary.js",
    "src/icn3dui/getPngText.js",
    "src/icn3dui/icn3duiInit.js",
    "src/icn3dui/loadDsn6File.js",
    "src/icn3dui/measureDistTwoSets.js",
    "src/icn3dui/modifyIcn3d.js",
    "src/icn3dui/openFullscreen.js",
    "src/icn3dui/pickCustomSphere.js",
    "src/icn3dui/renderStructure.js",
    "src/icn3dui/replayon.js",
    "src/icn3dui/residueids2spec.js",
    "src/icn3dui/resizeCanvas.js",
    "src/icn3dui/rotStruc.js",
    "src/icn3dui/saveColor.js",
    "src/icn3dui/saveFile.js",
    "src/icn3dui/saveStyle.js",
    "src/icn3dui/saveSvg.js",
    "src/icn3dui/selectComplement.js",
    "src/icn3dui/selectProperty.js",
    "src/icn3dui/setCustomFile.js",
    "src/icn3dui/setIcn3dui.js",
    "src/icn3dui/setLogCmd.js",
    "src/icn3dui/setOption.js",
    "src/icn3dui/setStyle.js",
    "src/icn3dui/shareLink.js",
    "src/icn3dui/shareLinkUrl.js",
    "src/icn3dui/show3DStructure.js",
    "src/icn3dui/showAll.js",
    "src/icn3dui/showClbonds.js",
    "src/icn3dui/showHalogenPi.js",
    "src/icn3dui/showHbonds.js",
    "src/icn3dui/showIonicInteractions.js",
    "src/icn3dui/showSsbonds.js",
    "src/icn3dui/showTitle.js",
    "src/icn3dui/switchHighlightLevel.js",
    "src/icn3dui/toggleMembrane.js",
    "src/icn3dui/toggleSelection.js",
    "src/icn3dui/twoddiagram.js",

    "src/icn3dui/3dprint/exportStlFile.js",
    "src/icn3dui/3dprint/stl.js",
    "src/icn3dui/3dprint/threedprint.js",
    "src/icn3dui/3dprint/vrml.js",

    "src/icn3dui/annotations/addtrack.js",
    "src/icn3dui/annotations/alignSequenceToStructure.js",
    "src/icn3dui/annotations/annoCddSite.js",
    "src/icn3dui/annotations/annoContact.js",
    "src/icn3dui/annotations/annoCrossLink.js",
    "src/icn3dui/annotations/annoDomain.js",
    "src/icn3dui/annotations/annoSnpClinVar.js",
    "src/icn3dui/annotations/annoSsbond.js",
    "src/icn3dui/annotations/annoTransMem.js",
    "src/icn3dui/annotations/annotations.js",
    "src/icn3dui/annotations/clickAddTrackButton.js",
    "src/icn3dui/annotations/getAnnotationData.js",
    "src/icn3dui/annotations/getSequenceData.js",
    "src/icn3dui/annotations/processSeqData.js",
    "src/icn3dui/annotations/setToolTip.js",
    "src/icn3dui/annotations/showAnnoType.js",
    "src/icn3dui/annotations/showAnnotations.js",
    "src/icn3dui/annotations/showNewTrack.js",
    "src/icn3dui/annotations/showSeq.js",
    "src/icn3dui/annotations/updateAnno.js",

    "src/icn3dui/highlight/hl_sequence.js",
    "src/icn3dui/highlight/hl_update.js",
    "src/icn3dui/highlight/selectResidues.js",
    "src/icn3dui/highlight/selectSequenceNonMobile.js",
    "src/icn3dui/highlight/selectTitle.js",
    "src/icn3dui/highlight/setAtomMenu.js",
    "src/icn3dui/highlight/setPredefinedInMenu.js",
    "src/icn3dui/highlight/updateHlAll.js",

    "src/icn3dui/html/clickMenu1.js",
    "src/icn3dui/html/clickMenu2.js",
    "src/icn3dui/html/clickMenu3.js",
    "src/icn3dui/html/clickMenu4.js",
    "src/icn3dui/html/clickMenu5.js",
    "src/icn3dui/html/clickMenu6.js",
    "src/icn3dui/html/clickReload_pngimage.js",
    "src/icn3dui/html/dialogs.js",
    "src/icn3dui/html/events.js",
    "src/icn3dui/html/exportPqr.js",
    "src/icn3dui/html/getAlignSequencesAnnotations.js",
    "src/icn3dui/html/getPotentialHtml.js",
    "src/icn3dui/html/pressCommandtext.js",
    "src/icn3dui/html/setDialogs.js",
    "src/icn3dui/html/setLogWindow.js",
    "src/icn3dui/html/setMenu1.js",
    "src/icn3dui/html/setMenu2.js",
    "src/icn3dui/html/setMenu2b.js",
    "src/icn3dui/html/setMenu3.js",
    "src/icn3dui/html/setMenu4.js",
    "src/icn3dui/html/setMenu5.js",
    "src/icn3dui/html/setMenu6.js",
    "src/icn3dui/html/setTheme.js",
    "src/icn3dui/html/setTools.js",
    "src/icn3dui/html/setTopMenusHtml.js",
    "src/icn3dui/html/set_html.js",

    "src/icn3dui/interaction/drawLineGraph.js",
    "src/icn3dui/interaction/getAllInteractionTable.js",
    "src/icn3dui/interaction/getGraphData.js",
    "src/icn3dui/interaction/getNodesLinksForSet.js",
    "src/icn3dui/interaction/retrieveInteractionData.js",
    "src/icn3dui/interaction/showClbonds.js",
    "src/icn3dui/interaction/showHalogenPi.js",
    "src/icn3dui/interaction/showHbonds.js",
    "src/icn3dui/interaction/showHydrogens.js",
    "src/icn3dui/interaction/showInteractions.js",
    "src/icn3dui/interaction/showIonicInteractions.js",
    "src/icn3dui/interaction/showSsbonds.js",
    "src/icn3dui/interaction/viewInteractionPairs.js",

    "src/icn3dui/parsers/align_parser.js",
    "src/icn3dui/parsers/chainalign_parser.js",
    "src/icn3dui/parsers/dsn6_parser.js",
    "src/icn3dui/parsers/mmcif_parser.js",
    "src/icn3dui/parsers/mmdb_parser.js",
    "src/icn3dui/parsers/mmtf_parser.js",
    "src/icn3dui/parsers/mol2_parser.js",
    "src/icn3dui/parsers/opm_parser.js",
    "src/icn3dui/parsers/pdb_parser.js",
    "src/icn3dui/parsers/sdf_parser.js",
    "src/icn3dui/parsers/xyz_parser.js",

    "src/icn3dui/parsers2/alignCoords.js",
    "src/icn3dui/parsers2/getMissingResidues.js",
    "src/icn3dui/parsers2/loadAtomDataIn.js",
    "src/icn3dui/parsers2/loadMmcifOpmDataPart2.js",
    "src/icn3dui/parsers2/loadMmdbOpmData.js",
    "src/icn3dui/parsers2/loadMmdbOpmDataPart2.js",
    "src/icn3dui/parsers2/loadOpmDataForAlign.js",
    "src/icn3dui/parsers2/loadOpmDataForChainalign.js",
    "src/icn3dui/parsers2/parseAtomData.js",
    "src/icn3dui/parsers2/parseChainRealignData.js",
    "src/icn3dui/parsers2/realign.js",
    "src/icn3dui/parsers2/realignChainOnSeqAlign.js",
    "src/icn3dui/parsers2/realignOnSeqAlign.js",
    "src/icn3dui/parsers2/set2D.js",
    "src/icn3dui/parsers2/setSeqAlign.js",
    "src/icn3dui/parsers2/setSeqAlignChain.js",
    "src/icn3dui/parsers2/setSeqAlignForRealign.js",
    "src/icn3dui/parsers2/setSeqPerResi.js",

    "src/icn3dui/selection/advanced.js",
    "src/icn3dui/selection/applyCommand.js",
    "src/icn3dui/selection/applyCommandLoad.js",
    "src/icn3dui/selection/clickModeswitch.js",
    "src/icn3dui/selection/commands.js",
    "src/icn3dui/selection/execCommands.js",
    "src/icn3dui/selection/getMenuFromCmd.js",
    "src/icn3dui/selection/hideSelection.js",
    "src/icn3dui/selection/loadScript.js",
    "src/icn3dui/selection/removeSelection.js",
    "src/icn3dui/selection/renderFinalStep.js",
    "src/icn3dui/selection/resetAll.js",
    "src/icn3dui/selection/retrieveSymmetry.js",
    "src/icn3dui/selection/saveSelection.js",
    "src/icn3dui/selection/selectAChain.js",
    "src/icn3dui/selection/selectAll.js",
    "src/icn3dui/selection/selectByCommand.js",
    "src/icn3dui/selection/selectBySpec.js",
    "src/icn3dui/selection/selectMainChains.js",
    "src/icn3dui/selection/selectResidueList.js",
    "src/icn3dui/selection/selection.js",
    "src/icn3dui/selection/setChainsInMenu.js",
    "src/icn3dui/selection/setProtNuclLigInMenu.js",
    "src/icn3dui/selection/setTransmemInMenu.js",
    "src/icn3dui/selection/sets.js",
    "src/icn3dui/selection/showSelection.js",

    "src/icn3dui/webservices/delphi.js",
    "src/icn3dui/webservices/dssp.js",
    "src/icn3dui/webservices/loadDelphiFile.js",
    "src/icn3dui/webservices/scap.js",
    "src/icn3dui/webservices/symd.js",

    "src/color-pick/color-picker.js"
];

// Create the gulp tasks for simple and full:
//make_js_task("simple", common_js.concat(simple_js).concat("src/icn3dui/simple_ui.js").concat(common_uijs).concat("src/icn3dui/highlight/hl_update_simple.js"));
//make_js_task("full", common_js.concat(full_js).concat("src/icn3dui/full_ui.js").concat(common_uijs).concat(full_uijs));
make_js_task("full", common_js.concat(full_js).concat(full_uijs));

//  'Rewrite the link and script tags in the html',
gulp.task('html',
  //gulp.series('clean'),
  function() {
//    return gulp.src(['simple.html', 'icn3d.html', 'share.html', 'example.html'])
    return gulp.src(['icn3d.html', 'share.html', 'example.html'])
        .pipe(dom(function() {
            var elems = this.querySelectorAll(
                "script[src],link[rel='stylesheet']");
            for (i = 0; i < elems.length; ++i) {
                var e = elems[i];
                var src_attr = (e.tagName == "SCRIPT") ? "src" : "href";
                var src_file = e.getAttribute(src_attr);

                var new_src, m, set_attr = true;
                if (m = src_file.match(/^(icn3d.*)\.css$/))
                    new_src = m[1] + "_" + package.version + ".css";
                else if (m = src_file.match(/^(icn3d.*)\.min\.js/))
                    new_src = m[1] + "_" + package.version + ".min.js";
                else if (m = src_file.match(/^(.*)$/)) {
                    new_src = m[1];
                }
                if (set_attr) e.setAttribute(src_attr, new_src);
            }
            return this;
        }))
        .pipe(gulp.dest(dist));
  });

gulp.task('html2',
  //gulp.series('clean'),
  function() {
    return gulp.src(['index.html', 'full.html'])
        .pipe(dom(function() {
            var elems = this.querySelectorAll(
                "script[src],link[rel='stylesheet']");
            for (i = 0; i < elems.length; ++i) {
                var e = elems[i];
                var src_attr = (e.tagName == "SCRIPT") ? "src" : "href";
                var src_file = e.getAttribute(src_attr);

                var new_src, m, set_attr = true;
                if (m = src_file.match(/^(icn3d.*)\.css$/))
                    new_src = m[1] + "_" + package.version + ".css";
                else if (m = src_file.match(/^(icn3d.*)\.min\.js/))
                    new_src = m[1] + "_" + package.version + ".min.js";
                else if (m = src_file.match(/^(.*)$/)) {
                    new_src = m[1];
                }
                if (set_attr) e.setAttribute(src_attr, new_src);
            }
            return this;
        }))
        .pipe(gulp.dest(dist))
        .pipe(rename('full_' + package.version + '.html'))
        .pipe(gulp.dest(dist));
  });

gulp.task('html3',
  //gulp.series('clean'),
  function() {
    return gulp.src(['full2.html'])
        .pipe(dom(function() {
            var elems = this.querySelectorAll(
                "script[src],link[rel='stylesheet']");
            for (i = 0; i < elems.length; ++i) {
                var e = elems[i];
                var src_attr = (e.tagName == "SCRIPT") ? "src" : "href";
                var src_file = e.getAttribute(src_attr);

                var new_src, m, set_attr = true;
                if (m = src_file.match(/^(icn3d.*)\.css$/))
                    new_src = m[1] + "_" + package.version + ".css";
                else if (m = src_file.match(/^(icn3d.*)\.min\.js/))
                    new_src = m[1] + "_" + package.version + ".min.js";
                else if (m = src_file.match(/^(.*)$/)) {
                    new_src = m[1];
                }
                if (set_attr) e.setAttribute(src_attr, new_src);
            }
            return this;
        }))
        .pipe(gulp.dest(dist))
        .pipe(rename('full2_' + package.version + '.html'))
        .pipe(gulp.dest(dist));
  });

//  'Prepare all the distribution files (except the .zip).',
//gulp.task('dist',
//  gulp.series('clean', 'libs-three','libs-jquery','libs-jquery-ui','libs-jquery-ui-css','libs-jquery-ui-images1','libs-jquery-ui-images2',
//   'ssimages','copy','copy-rename1','copy-rename2','src-js-simple','src-js-full','html','html2','html3')
//);
gulp.task('dist',
  gulp.series('clean', 'libs-three','libs-jquery','libs-jquery-ui','libs-jquery-ui-css','libs-jquery-ui-images1','libs-jquery-ui-images2',
   'ssimages','copy','copy-rename2','src-js-full','html','html2','html3')
);

//  'Zip up the dist into icn3d-<version>.zip',
gulp.task('zip',
  function() {
    return gulp.src('./dist/**')
      .pipe(rename(function(path) {
        path.dirname = base_name + '/' + path.dirname;
      }))
      .pipe(zip(base_name + '.zip'))
      .pipe(gulp.dest('dist'));
  });

//  'The default task creates the distribution files and the .zip from scratch',
gulp.task('default',
  gulp.series('dist','zip')
);

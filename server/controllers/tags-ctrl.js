const Tags = require('../models/tags-model');

ping = (req, res) => {
    return res.json({ success: true, message: `Endpoint reached` });
};

getTags = async (req, res) => {
    console.log('##getTags()');

    await Tags.find({}, (err, Tags) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }
        if (!Tags.length) {
            return res
                .status(404)
                .json({ success: false, error: `Tags not found` });
        }
        return res.status(200).json({ success: true, data: Tags });
    }).catch(err => console.log(err));
};

//createTag = (req, res) => {
//    const body = req.body
//    body = { tag: 'demo' }

//    if (!body) {
//        return res.status(400).json({
//            success: false,
//            error: 'You must provide a tag',
//        })
//    }

//    const tag = new Tags(body)

//    if (!tag) {
//        return res.status(400).json({ success: false, error: err })
//    }

//    tag
//        .save()
//        .then(() => {
//            return res.status(201).json({
//                success: true,
//                id: Tags._id,
//                message: 'Tag created',
//            })
//        })
//        .catch(error => {
//            return res.status(400).json({
//                error,
//                message: 'Tag not created!',
//            })
//        })
//}

//updateTag = async (req, res) => {
//    const body = req.body

//    if (!body) {
//        return res.status(400).json({
//            success: false,
//            error: 'You must provide a body to update',
//        })
//    }

//    Tags.findOne({ _id: req.params.id }, (err, tag) => {
//        if (err) {
//            return res.status(404).json({
//                err,
//                message: 'Tag not found!',
//            })
//        }
//        tag.tag = body.tag
//        tag
//            .save()
//            .then(() => {
//                return res.status(200).json({
//                    success: true,
//                    id: tag._id,
//                    message: 'Tag updated!',
//                })
//            })
//            .catch(error => {
//                return res.status(404).json({
//                    error,
//                    message: 'Tag not updated!',
//                })
//            })
//    })
//}

//deleteTag = async (req, res) => {
//    await Tag.findOneAndDelete({ _id: req.params.id }, (err, tag) => {
//        if (err) {
//            return res.status(400).json({ success: false, error: err })
//        }

//        if (!tag) {
//            return res
//                .status(404)
//                .json({ success: false, error: `Tag not found` })
//        }

//        return res.status(200).json({ success: true, data: tag })
//    }).catch(err => console.log(err))
//}

//getTagById = async (req, res) => {
//    await Tag.findOne({ _id: req.params.id }, (err, tag) => {
//        if (err) {
//            return res.status(400).json({ success: false, error: err })
//        }

//        if (!tag) {
//            return res
//                .status(404)
//                .json({ success: false, error: `Tag not found` })
//        }
//        return res.status(200).json({ success: true, data: tag })
//    }).catch(err => console.log(err))
//}

getTags = async (req, res) => {
    console.log('##getTags()');

    await Tags.find({}, (err, Tags) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }
        if (!Tags.length) {
            return res
                .status(404)
                .json({ success: false, error: `Tags not found` });
        }
        return res.status(200).json({ success: true, data: Tags });
    }).catch(err => console.log(err));
};

module.exports = {
    //createTag,
    //updateTag,
    //deleteTag,
    getTags,
    //getTagById,
    ping
};

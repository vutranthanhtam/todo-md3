import { useModel } from "../models/use.model.js";

export const useController = {
    findMany: async (req, res) => {
        try {
            let {err, data} = await useModel.findMany();
            if(err) throw err;

            return res.status(200).json({
                message: "Lấy dữ liệu thành công",
                data
            });
        }catch(err) {
            return res.status(500).json({
                message: err
            });
        }
    },
    create: async (req, res) => {
        try {
            let {err, data} = await useModel.create(req.body);
            if(err) throw err;

            return res.status(200).json({
                message: "Thêm dữ liệu thành công",
                data
            });
        }catch(err) {
            return res.status(500).json({
                message: err
            });
        }
    },
    delete: async (req, res) => {
        
        try {
            let {err, data} = await useModel.delete(req.params.id);
            if(err) throw err;

            return res.status(200).json({
                message: "Xóa dữ liệu thành công",
                data
            });
        }catch(err) {
            return res.status(500).json({
                message: err
            });
        }
    },
    update: async (req, res) => {
        
        try {
            let {err, data} = await useModel.update(req.params.id, req.body);
            if(err) throw err;

            return res.status(200).json({
                message: "Cập nhập dữ liệu thành công",
                data
            });
        }catch(err) {
            return res.status(500).json({
                message: err
            });
        }
    },
}

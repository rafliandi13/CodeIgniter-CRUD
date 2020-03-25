<?php 

class About extends Controller {
    public function index($nama = 'Rafliandi Ardana', $pekerjaan = 'Mahasiswa',$umur = 17){
        $data['nama'] = $nama;
        $data['pekerjaan'] = $pekerjaan;
        $data['umur'] = $umur;
        $data['judul'] = 'About';
        $this->view('tamplates/header',$data);
        $this->view('about/index',$data);
        $this->view('tamplates/footer');
    }
    public function page(){
        $data['judul'] = 'Pages';
        $this->view('tamplates/header', $data);
        $this->view('about/page');
        $this->view('tamplates/footer');
    }
}
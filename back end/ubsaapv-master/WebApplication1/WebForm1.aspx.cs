using System;
using System.Data;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Drawing;
using MySql.Data;
using MySql.Data.MySqlClient;

namespace WebApplication1
{

    public partial class WebForm1 : System.Web.UI.Page
    {
        int id = 0;
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        protected void btnCadastrar_Click(object sender, EventArgs e)
        {
            MySqlConnection conn = new MySqlConnection();
            MySqlCommand cmd = new MySqlCommand();

            conn.ConnectionString =
                "ubsfacil.sytes.net; user=geral; database=aapv; port=3306; password=aapv;";
            cmd.Connection = conn;

            conn.Open();

            string nome = txtNome.Text;
            string cpf = txtCpf.Text;
            string email = txtEmail.Text;
            string senha = txtSenha.Text;
            string num_cns = txtCns.Text;
            int id_permissao = 0;
            try{
                cmd.Connection = conn;
                string SQL = "INSERT INTO tb_paciente (ID_paciente,nome,cpf,email, senha,num_cns,id_permissao) VALUES (@ID_paciente,@nome,@cpf,@email,@senha,@num_cns,@id_permissao)";
                cmd.CommandText = SQL;
                cmd.Parameters.AddWithValue("ID_paciente", id);
                cmd.Parameters.AddWithValue("nome", nome);
                cmd.Parameters.AddWithValue("cpf", cpf);
                cmd.Parameters.AddWithValue("email", email);
                cmd.Parameters.AddWithValue("senha", senha);
                cmd.Parameters.AddWithValue("num_cns", num_cns);
                cmd.Parameters.AddWithValue("ID_permissao", id_permissao);
                cmd.ExecuteNonQuery();
                id += 1;
                lblTeste.Text = "deu certo";
                lblTeste.BackColor = Color.Green;
            }catch(Exception err)
            {
                lblTeste.Text = err.Message;
                lblTeste.BackColor = Color.Red;
            }
        }
    }
}
